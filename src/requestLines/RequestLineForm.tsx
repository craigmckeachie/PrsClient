import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRequestLine } from "./IRequestLine";
import { requestLineAPI } from "./RequestLineAPI";
import { IProduct } from "../products/IProduct";

interface IRequestLineFormProps {
  requestLine: IRequestLine;
  products: IProduct[];
  onRemove: (requestLine: IRequestLine) => void;
}

function RequestLineForm({
  requestLine: initialRequestLine,
  products,
}: IRequestLineFormProps) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IRequestLine>({
    defaultValues: () => {
      return Promise.resolve(initialRequestLine);
    },
  });

  const requestLine = getValues();

  const save: SubmitHandler<IRequestLine> = async (requestLine) => {
    if (!requestLine.id) {
      requestLine = await requestLineAPI.post(requestLine);
    } else {
      await requestLineAPI.put(requestLine);
    }
  };

  return (
    <tr>
      {/* <form onSubmit={handleSubmit(save)}> */}
      <td>
        <select
          id="vendorId"
          {...register("productId", {
            valueAsNumber: true,
            required: "Product is required",
          })}
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
      </td>
      <td>
        <span className="form-label">${requestLine?.product?.price}</span>
      </td>
      <td>
        {/* <input type="number" className="form-control" defaultValue={0} /> */}
        <input
          id="quantity"
          {...register("quantity", {
            required: "Quantity is required",
          })}
          type="number"
          className={`form-control ${errors?.quantity && "is-invalid"} `}
        />
        <div className="invalid-feedback">{errors?.quantity?.message}</div>
      </td>
      <td>
        <span className="form-label">
          ${requestLine?.product?.price * requestLine?.quantity}
        </span>
      </td>
      <td>
        <button type="button" className="btn btn-outline">
          <svg
            className="bi pe-none me-2"
            width={16}
            height={16}
            fill="#007AFF"
          >
            <use xlinkHref={`${bootstrapIcons}#trash`} />
          </svg>
        </button>
        <button type="submit" className="btn btn-outline">
          <svg
            className="bi pe-none me-2"
            width={16}
            height={16}
            fill="#007AFF"
          >
            <use xlinkHref={`${bootstrapIcons}#check`} />
          </svg>
        </button>
      </td>
      {/* </form> */}
    </tr>
  );
}

export default RequestLineForm;
