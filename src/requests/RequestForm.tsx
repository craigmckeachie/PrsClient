import { Link, useNavigate, useParams } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import {
  useForm,
  SubmitHandler,
  useFieldArray,
  useWatch,
  Control,
} from "react-hook-form";
import { IRequest } from "./IRequest";
import { requestAPI } from "./RequestAPI";
import toast from "react-hot-toast";
import { IUser } from "../users/IUser";
import { useState } from "react";
import { userAPI } from "../users/UserAPI";
import { IRequestLine } from "../requestLines/IRequestLine";
import { IProduct } from "../products/IProduct";
import { productAPI } from "../products/ProductAPI";

let emptyRequestLine: IRequestLine = {
  id: undefined,
  quantity: 0,
  requestId: undefined,
  request: {} as IRequest,
  productId: undefined,
  product: {} as IProduct,
};

let emptyRequest: IRequest = {
  id: undefined,
  description: "",
  justification: "",
  rejectionReason: undefined,
  deliveryMode: "",
  status: "New",
  total: 0,
  userId: 417,
  user: {} as IUser,
  lines: [emptyRequestLine],
};

// function Total({ control }: { control: Control<IRequest> }) {
//   const requestLines = useWatch({
//     name: "lines",
//     control,
//   });
//   // console.log(requestLines);

//   let total = 0;
//   // for (const requestLine of requestLines) {
//   //   total += requestLine.product?.price ?? 0;
//   // }
//   return <span>${total}</span>;
// }

function Price({
  control,
  index,
}: {
  control: Control<IRequestLine>;
  index: number;
}) {
  const value = useWatch({
    control,
    name: `lines.${index}`,
  });
  // console.log(value);

  return <span>{value.quantity}</span>;
}

// function WatchProductId({
//   control,
//   index,
// }: {
//   control: Control<IRequest>;
//   index: number;
// }) {
//   const value = useWatch({
//     control,
//     name: `lines.${index}.productId`,
//   });
//   console.log(value);

//   return <span>{value}</span>;
// }

function RequestForm() {
  const navigate = useNavigate();
  let { id } = useParams<{ id: string }>();
  const [users, setUsers] = useState<IUser[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  async function loadUsers() {
    const data = await userAPI.list();
    setUsers(data);
  }

  async function loadProducts() {
    const data = await productAPI.list();
    setProducts(data);
  }

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<IRequest>({
    defaultValues: async () => {
      //these can run in parallel eventually
      await loadUsers();
      await loadProducts();
      if (!id) return Promise.resolve(emptyRequest);
      const requestId = Number(id);
      //  let lines = await requestLineAPI.list();
      return await requestAPI.find(requestId);
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    name: "lines",
    control,
  });

  const save: SubmitHandler<IRequest> = async (request) => {
    if (!request.id) {
      request = await requestAPI.post(request);
    } else {
      await requestAPI.put(request);
    }
    toast.success("Successfully saved.");
    navigate("/requests");
  };

  console.log(watch());
  console.log("render");

  return (
    <form className="form" onSubmit={handleSubmit(save)}>
      <div className="request-header">
        <div className="column1 w-75">
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              type="text"
              className={`form-control ${errors?.description && "is-invalid"} `}
              placeholder="Enter a brief description for your purchase request"
            />
            <div className="invalid-feedback">
              {errors?.description?.message}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="justification" className="form-label">
              Justification
            </label>
            <input
              id="justification"
              {...register("justification", {
                required: "Justification is required",
              })}
              type="text"
              className={`form-control ${
                errors?.justification && "is-invalid"
              } `}
              placeholder="Enter a justification for your purchase request"
            />
            <div className="invalid-feedback">
              {errors?.justification?.message}
            </div>
          </div>
        </div>
        <div className="column2 w-50">
          <div className="mb-3">
            <label htmlFor="deliveryMode" className="form-label">
              Delivery Method
            </label>
            <select
              id="deliveryMode"
              {...register("deliveryMode", {
                required: "Delivery method is required",
              })}
              className={`form-select ${errors?.deliveryMode && "is-invalid"} `}
            >
              <option value="">Select...</option>
              <option value="Pickup">Pickup</option>
              <option value="Delivery">Delivery</option>
              <option value="Signature Delivery">Signature Delivery</option>
            </select>
            <div className="invalid-feedback">
              {errors?.deliveryMode?.message}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              {...register("status", {
                required: "Status is required",
              })}
              disabled
              defaultValue="New"
              className={`form-select ${errors?.status && "is-invalid"} `}
            >
              <option value="">Select...</option>
              <option value="New">New</option>
              <option value="Review">Review</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <div className="invalid-feedback">{errors?.status?.message}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">
              Requested By
            </label>
            <select
              id="status"
              {...register("userId", {
                required: "Requested by is required",
              })}
              disabled
              className={`form-select ${errors?.userId && "is-invalid"} `}
            >
              <option value="">Select...</option>
              {users.map((u: IUser) => (
                <option key={u.id} value={u.id}>
                  {u.firstname} {u.lastname}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{errors?.userId?.message}</div>
          </div>
        </div>
      </div>

      <div className="card p-4">
        <h5 className="card-title">Items</h5>
        <table className="table w-75">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {fields.map((requestLine: IRequestLine, index: number) => {
              return (
                <tr key={requestLine.id}>
                  <td>
                    <select
                      {...register(`lines.${index}.productId` as const, {
                        valueAsNumber: true,
                        required: "Product is required",
                      })}
                      onChange={(event) => {
                        let productId = Number(event.target.value);
                        const currentProduct = products.find(
                          (p) => p.id === productId
                        );
                        console.log(currentProduct);
                        if (currentProduct) {
                          setValue(`lines.${index}.product`, currentProduct);
                        }
                      }}
                      className={`form-select ${
                        errors?.lines?.[index]?.productId && "is-invalid"
                      } `}
                    >
                      <option value="">Select...</option>
                      {products.map((p: IProduct) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                    <div className="invalid-feedback">
                      {errors?.lines?.[index]?.productId?.message}
                    </div>
                  </td>
                  <td>
                    <span className="form-label">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(
                        getValues().lines?.[index]?.product?.price ?? 0
                      )}
                    </span>
                  </td>
                  <td>
                    <input
                      id="quantity"
                      {...register(`lines.${index}.quantity` as const, {
                        required: "Quantity is required",
                        min: {
                          value: 1,
                          message: "Quantity must be at least 1",
                        },
                        valueAsNumber: true,
                      })}
                      type="number"
                      className={`form-control ${
                        errors?.lines?.[index]?.quantity && "is-invalid"
                      } `}
                    />
                    <div className="invalid-feedback">
                      {errors?.lines?.[index]?.quantity?.message}
                    </div>
                  </td>
                  <td>
                    <span className="form-label">
                      $
                      {(getValues().lines?.[index]?.product?.price ?? 0) *
                        getValues().lines?.[index]?.quantity}
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => remove(index)}
                    >
                      <svg
                        className="bi pe-none me-2"
                        width={16}
                        height={16}
                        fill="#007AFF"
                      >
                        <use xlinkHref={`${bootstrapIcons}#trash`} />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => append(emptyRequestLine)}
                >
                  <svg
                    className="bi pe-none me-2"
                    width={16}
                    height={16}
                    fill="#007AFF"
                  >
                    <use xlinkHref={`${bootstrapIcons}#plus-circle`} />
                  </svg>
                  Add a line
                </button>
              </td>
              <td />
              <td />
              <td>{/* <Total control={control} /> */}</td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="row-4 d-flex flex-row justify-content-end w-100 gap-4">
        <div className="d-flex justify-content-end mt-4">
          <Link to={"/requests"} className="btn btn-outline-primary me-2">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#FFFFFF"
            >
              <use xlinkHref={`${bootstrapIcons}#save`} />
            </svg>
            Save request
          </button>
        </div>
      </div>
    </form>
  );
}

export default RequestForm;
