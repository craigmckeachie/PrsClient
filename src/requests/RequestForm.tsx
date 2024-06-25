import { Link, useNavigate, useParams } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRequest } from "./IRequest";
import { requestAPI } from "./RequestAPI";
import toast from "react-hot-toast";
import { IUser } from "../users/IUser";

let emptyRequest: IRequest = {
  id: undefined,
  description: "",
  justification: "",
  rejectionReason: undefined,
  deliveryMode: "",
  status: "New",
  total: 0,
  userId: undefined,
  user: {} as IUser,
};

function RequestForm() {
  const navigate = useNavigate();
  let { id } = useParams<{ id: string }>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequest>({
    defaultValues: async () => {
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
    <form className="d-flex flex-wrap w-75 gap-2" onSubmit={handleSubmit(save)}>
      <div className="row-1 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-75">
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
          <div className="invalid-feedback">{errors?.description?.message}</div>
        </div>
        <div className="mb-3 w-25">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            id="lastname"
            {...register("lastname", {
              required: "Last name is required",
            })}
            type="text"
            className={`form-control ${errors?.lastname && "is-invalid"} `}
            placeholder="Enter last name"
          />
          <div className="invalid-feedback">{errors?.lastname?.message}</div>
        </div>
      </div>
      {/* <div className="row-2 d-flex flex-row w-100 gap-4"></div> */}

      <div className="row-2 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
          <label htmlFor="justification" className="form-label">
            Justification
          </label>
          <input
            id="justification"
            {...register("justification")}
            type="justification"
            className={`form-control ${errors?.justification && "is-invalid"} `}
            placeholder="Enter a justification for your purchase request"
          />
          <div className="invalid-feedback">{errors?.justification?.message}</div>
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            {...register("phone")}
            type="text"
            className={`form-control ${errors?.phone && "is-invalid"} `}
            placeholder="Enter phone number"
          />
          <div className="invalid-feedback">{errors?.phone?.message}</div>
        </div>
      </div>
      <div className="row-3 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
          <label htmlFor="requestname" className="form-label">
            Requestname
          </label>
          <input
            id="requestname"
            {...register("requestname", {
              required: "Requestname is required",
              maxLength: {
                value: 50,
                message: "Exceeded maximum length",
              },
            })}
            type="text"
            className={`form-control ${errors?.requestname && "is-invalid"} `}
            placeholder="Enter requestname"
          />
          <div className="invalid-feedback">{errors?.requestname?.message}</div>
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Role</label>
          <br />

          <div className="form-check form-check-inline">
            <input
              {...register("isReviewer")}
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="isReviewer" className="form-check-label">
              Reviewer
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              {...register("isAdmin")}
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="isAdmin" className="form-check-label">
              Admin
            </label>
          </div>
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
            Save request
          </button>
        </div>
      </div>
    </form>
  );
}

export default RequestForm;
