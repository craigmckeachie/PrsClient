import { Link, useParams } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRequest } from "./IRequest";
import { requestAPI } from "./RequestAPI";
import toast from "react-hot-toast";
import { IUser } from "../users/IUser";
import { useState } from "react";
import { userAPI } from "../users/UserAPI";
import RequestLineTable from "../requestLines/RequestLineTable";
import { useUserContext } from "../App";

let emptyRequest: IRequest = {
  id: undefined,
  description: "",
  justification: "",
  rejectionReason: undefined,
  deliveryMode: "",
  status: "New",
  total: 0,
  userId: undefined,
  requestlines: [],
};

function RequestForm() {
  let { id } = useParams<{ id: string }>();
  const [users, setUsers] = useState<IUser[]>([]);
  const { user } = useUserContext();

  async function loadUsers() {
    const data = await userAPI.list();
    setUsers(data);
  }

  function isNew() {
    return Boolean(id);
  }

  async function loadRequest() {
    let requestId = Number(id);
    if (!requestId) {
      const id = getValues("id");
      if (id) requestId = id;
    }
    const request = await requestAPI.find(requestId);
    reset(request);
  }

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IRequest>({
    defaultValues: async () => {
      await loadUsers();
      emptyRequest.userId = user?.id ?? 0;
      if (!id) return Promise.resolve(emptyRequest);
      const requestId = Number(id);
      const request = await requestAPI.find(requestId);
      return request;
    },
    mode: "onBlur",
  });

  const save: SubmitHandler<IRequest> = async (request) => {
    if (!request.id) {
      const newRequest = await requestAPI.post(request);
      setValue("id", newRequest.id);
      // navigate(`/requests/edit/${request.id}`);
    } else {
      await requestAPI.put(request);
    }

    toast.success("Successfully saved.");
  };

  const request = getValues();

  return (
    <>
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
                className={`form-control ${
                  errors?.description && "is-invalid"
                } `}
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
                className={`form-select ${
                  errors?.deliveryMode && "is-invalid"
                } `}
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
                disabled={!isNew()}
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
      {console.log(request)}
      {request.id && (
        <RequestLineTable
          requestId={request.id}
          requestLines={request.requestlines}
          onLoad={loadRequest}
        />
      )}
    </>
  );
}

export default RequestForm;
