import { IUser } from "../users/IUser";
import { getTextBackgroundByStatus } from "../utility/formatUtilities";
import { IRequest } from "./IRequest";

interface IRequestHeaderProps {
  request: IRequest;
  user: IUser;
}

function RequestHeader({ request, user }: IRequestHeaderProps) {
  return (
    <section className="d-flex justify-content-between pe-5">
      <dl className="param param-feature">
        <dt>Description</dt>
        <dd>{request.description}</dd>
        <dt>Justification</dt>
        <dd>{request.justification}</dd>
      </dl>
      <dl>
        <dt>Delivery Method</dt>
        <dd>{request.deliveryMode}</dd>
        <dt>Status</dt>
        <dd>
          <span
            className={`badge ${getTextBackgroundByStatus(request.status)}`}
          >
            {request.status}
          </span>
        </dd>
      </dl>
      <dl>
        <dt>Requested By</dt>
        <dd>
          {user?.firstname} {user?.lastname}
        </dd>
        {request.rejectionReason && (
          <>
            <dt>Rejection Reason</dt>
            <dd>{request.rejectionReason}</dd>
          </>
        )}
      </dl>
    </section>
  );
}

export default RequestHeader;
