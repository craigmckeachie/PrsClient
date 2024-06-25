import { useState, useEffect } from "react";
import { IRequest } from "./IRequest";
import { requestAPI } from "./RequestAPI";
import RequestRow from "./RequestRow";

function RequestTable() {
  const [requests, setRequests] = useState<IRequest[]>([]);

  useEffect(() => {
    async function loadRequests() {
      const data = await requestAPI.list();
      setRequests(data);
    }
    loadRequests();
  }, []);

  function removeRequest(request: IRequest) {
    setRequests(requests.filter((r) => r.id !== request.id));
  }

  return (
    <>
      <div className="d-flex flex-column mb-4 w-25">
        <label htmlFor="status" className="form-label">
          Status
        </label>
        <select id="status" className="form-select">
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="review">Review</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <section className="list d-flex flex-row flex-wrap bg-body-tertiary gap-5 p-4 rounded-4">
        <table className="table table-hover w-75 table rounded-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
              <th scope="col">Requested By</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <RequestRow
                key={request.id}
                request={request}
                onRemove={removeRequest}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default RequestTable;
