import { Link } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import VendorList from "./VendorList";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function VendorsPage() {
  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2 ">
        <h2>Vendors</h2>

        <ToastContainer
          className="p-3"
          position="bottom-start"
          style={{ zIndex: 1 }}
        >
          <Toast bg="primary">
            <Toast.Header className="bg-primary1">
              <svg
                id="logo-35"
                width={25}
                height={19}
                viewBox="0 0 50 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                  className="ccompli1"
                  fill="#007AFF"
                />
                <path
                  d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                  className="ccustom"
                  fill="#312ECB"
                />
              </svg>
              <span className="ms-2 me-auto">Purchase Request System</span>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body className="text-light">Successfully saved.</Toast.Body>
          </Toast>
        </ToastContainer>
        <Link to={`/vendors/create`} className="btn btn-primary">
          <svg
            className="bi pe-none me-2"
            width={32}
            height={32}
            fill="#FFFFFF"
          >
            <use xlinkHref={`${bootstrapIcons}#plus`} />
          </svg>
          Create a vendor
        </Link>
      </div>
      <VendorList />
      <div aria-live="polite" aria-atomic="true" className=""></div>
    </section>
  );
}
export default VendorsPage;
