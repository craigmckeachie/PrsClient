import { IRequest } from "./IRequest";

interface IRequestHeaderProps {
  request: IRequest;
}

function RequestHeader({ request }: IRequestHeaderProps) {
  return (
    <section>
      <p>{request.description}</p>
      <p>{request.justification}</p>
    </section>
  );
}

export default RequestHeader;
