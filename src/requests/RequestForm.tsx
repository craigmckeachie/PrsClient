import { Link, useNavigate, useParams } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRequest } from "./IRequest";
import { requestAPI } from "./RequestAPI";
import toast from "react-hot-toast";
import { IUser } from "../users/IUser";
import { useState } from "react";
import { userAPI } from "../users/UserAPI";

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
};

function RequestForm() {
  const navigate = useNavigate();
  let { id } = useParams<{ id: string }>();
  const [users, setUsers] = useState<IUser[]>([]);

  async function loadUsers() {
    const data = await userAPI.list();
    console.log(data);

    setUsers(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequest>({
    defaultValues: async () => {
      await loadUsers();
      if (!id) return Promise.resolve(emptyRequest);
      const requestId = Number(id);
      return await requestAPI.find(requestId);
    },
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
  // console.log(errors);

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
              // defaultValue={417}
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
      {/* <div className="card p-4">
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
            <tr>
              <td>
                <select name id className="form-select">
                  <option value selected>
                    Select...
                  </option>
                  <option value>
                    Alpha Soft Touch Gel Stylus Pens (10 pack)
                  </option>
                  <option value>College Ruled Notebook</option>
                </select>
              </td>
              <td>
                <span className="form-label">$0.00</span>
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={100}
                />
              </td>
              <td>
                <span className="form-label">$0.00</span>
              </td>
              <td>
                <svg
                  className="bi pe-none me-2"
                  width={16}
                  height={16}
                  fill="#007AFF"
                >
                  <use xlinkHref="./images/bootstrap-icons.svg#trash" />
                </svg>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button className="btn btn-outline-primary">
                  <svg
                    className="bi pe-none me-2"
                    width={16}
                    height={16}
                    fill="#007AFF"
                  >
                    <use xlinkHref="./images/bootstrap-icons.svg#plus-circle" />
                  </svg>
                  Add a line
                </button>
              </td>
              <td />
              <td />
              <td>Total: $0.00</td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div> */}

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
