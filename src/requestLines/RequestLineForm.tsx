import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";

import { IRequestLine } from "../requestLines/IRequestLine";
import { IProduct } from "../products/IProduct";
import { productAPI } from "../products/ProductAPI";
import { requestLineAPI } from "../requestLines/RequestLineAPI";

interface RequestLineFormProps {
  requestId: number;
  requestLine?: IRequestLine | undefined;
  onSave: () => void;
}

function RequestLineForm({
  requestId,
  requestLine,
  onSave,
}: RequestLineFormProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  // const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>(
  //   undefined
  // );

  let emptyRequestLine: IRequestLine = {
    id: undefined,
    quantity: 0,
    requestId: requestId,
    productId: undefined,
  };

  async function loadProducts() {
    const data = await productAPI.list();
    setProducts(data);
  }

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IRequestLine>({
    defaultValues: async () => {
      await loadProducts();
      if (!requestLine) return Promise.resolve(emptyRequestLine);
      return Promise.resolve({ ...requestLine });
      // return await requestLineAPI.find(requestLine.id);
    },
    // mode: "onBlur",
  });

  useEffect(() => {
    reset(requestLine);
  }, [requestLine]);

  const save: SubmitHandler<IRequestLine> = async (requestLine) => {
    if (!requestLine.id) {
      await requestLineAPI.post(requestLine);
    } else {
      await requestLineAPI.put(requestLine);
    }

    onSave();
    toast.success("Successfully saved.");
  };

  // let product = products.find(p=> p.id === getValues().productId);
  // let currentProduct: IProduct | undefined;

  return (
    <form className="form w-50" onSubmit={handleSubmit(save)}>
      <div className="card p-4">
        <h5 className="card-title">
          <strong>Item</strong>
        </h5>
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
              // let productId = Number(event.target.value);
              // const product = products.find((p) => p.id === productId);
              // if (product) {
              //   setSelectedProduct(product);
              // }
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
        {/* 
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <span className="form-label">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(selectedProduct?.price ?? 0)}
          </span>
        </div> */}

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

        {/* <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <span className="form-label">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(selectedProduct?.price ?? 0 * getValues()?.quantity)}
          </span>
        </div> */}

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

export default RequestLineForm;
