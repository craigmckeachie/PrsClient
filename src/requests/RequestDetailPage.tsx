import { useEffect, useState } from "react";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import RequestHeader from "./RequestHeader";
import { IRequest } from "./IRequest";
import toast from "react-hot-toast";
import { requestAPI } from "./RequestAPI";
import { useParams } from "react-router-dom";
import RequestLineTable from "../requestLines/RequestLineTable";

function RequestDetailPage() {
  let { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState<IRequest | undefined>(undefined);

  async function loadRequest() {
    let requestId = Number(id);
    setLoading(true);
    try {
      const request = await requestAPI.find(requestId);
      setRequest(request);
    } catch (error: any) {
      toast.error(error.message);
      throw new Error("There was an error loading the request");
    } finally {
      setLoading(false);
    }
  }

  async function approve() {
    if (!request) return;
    setLoading(true);
    try {
      await requestAPI.approve(request);
    } catch (error: any) {
      toast.error(error.message);
      throw new Error("An error occured approving the request");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRequest();
  }, []);

  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Request</h2>
        <div className="d-flex gap-2">
          <button type="button" className="btn btn-primary" onClick={approve}>
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#FFFFFF"
            >
              <use xlinkHref={`${bootstrapIcons}#hand-thumbs-up`} />
            </svg>
            Approve
          </button>
          <button type="button" className="btn btn-outline-danger">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="currentColor"
            >
              <use xlinkHref={`${bootstrapIcons}#hand-thumbs-down`} />
            </svg>
            Reject
          </button>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {request && <RequestHeader request={request} />}
      {request && (
        <RequestLineTable
          requestLines={request.requestlines}
          onLoad={loadRequest}
          enableActions={false}
        />
      )}
    </section>
  );
}

export default RequestDetailPage;
