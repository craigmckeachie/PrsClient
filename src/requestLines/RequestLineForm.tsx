import { Link, useNavigate, useParams } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

import { IRequestLine } from "../requestLines/IRequestLine";
import { IProduct } from "../products/IProduct";
import { productAPI } from "../products/ProductAPI";
import { requestLineAPI } from "../requestLines/RequestLineAPI";

let emptyRequestLine: IRequestLine = {
  id: undefined,
  quantity: 0,
  requestId: undefined,
  productId: undefined,
};

function RequestForm() {
  const navigate = useNavigate();
  let { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<IProduct[]>([]);

  async function loadProducts() {
    const data = await productAPI.list();
    setProducts(data);
  }

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IRequestLine>({
    defaultValues: async () => {
      await loadProducts();
      if (!id) return Promise.resolve(emptyRequestLine);
      const requestLineId = Number(id);
      return await requestLineAPI.find(requestLineId);
    },
    mode: "onBlur",
  });

  const save: SubmitHandler<IRequestLine> = async (requestLine) => {
    if (!requestLine.id) {
      await requestLineAPI.post(requestLine);
    } else {
      await requestLineAPI.put(requestLine);
    }

    toast.success("Successfully saved.");
  };

  return (
    <form className="form" onSubmit={handleSubmit(save)}>
      <div className="card p-4">
        <h5 className="card-title">Item</h5>
        <div className="mb-3">
          <label htmlFor="productId" className="form-label">
            Product
          </label>
          <select
            {...register("productId", {
              valueAsNumber: true,
              required: "Product is required",
            })}
            onChange={(event) => {
              let productId = Number(event.target.value);
              const currentProduct = products.find((p) => p.id === productId);
              if (currentProduct) {
              }
            }}
            className={`form-select ${errors?.productId && "is-invalid"} `}
          >
            <option value="">Select...</option>
            {products.map((p: IProduct) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{errors?.productId?.message}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <span className="form-label">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(getValues().productId ?? 0)}
          </span>
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            id="quantity"
            {...register("quantity", {
              required: "Quantity is required",
              min: {
                value: 1,
                message: "Quantity must be at least 1",
              },
              valueAsNumber: true,
            })}
            type="number"
            className={`form-control ${errors?.quantity && "is-invalid"} `}
          />
          <div className="invalid-feedback">{errors?.quantity?.message}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <span className="form-label">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(getValues().productId ?? 0 * getValues()?.quantity)}
          </span>
        </div>
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
            Save line
          </button>
        </div>
      </div>
    </form>
  );
}

export default RequestForm;
