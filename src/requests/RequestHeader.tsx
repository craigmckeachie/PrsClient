import { IRequest } from "./IRequest";

interface IRequestHeaderProps {
  request: IRequest;
}

function RequestHeader({ request }: IRequestHeaderProps) {
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
        <dd>{request.status}</dd>
      </dl>
      <dl>
        <dt>Requested By</dt>
        <dd>{request.userId}</dd>
      </dl>
    </section>
  );
}

export default RequestHeader;
