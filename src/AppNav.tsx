import { Link } from "react-router-dom";
import bootstrapIcons from "./assets/bootstrap-icons.svg";

function AppNav() {
  return (
    <nav
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-end min-vh-100 position-sticky"
      style={{ width: 280 }}
    >
      <a href="" className="mb-4 text-decoration-none fw-bolder">
        <svg className="bi pe-none me-2" width={16} height={16} fill="#007AFF">
          <use xlinkHref={`${bootstrapIcons}#plus-circle-fill`} />
        </svg>
        Create new
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="text-secondary fw-bold mb-2">Purchase</li>
        <li>
          <a href="requests.html" className="nav-link">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#007AFF"
            >
              <use xlinkHref={`${bootstrapIcons}#cart`} />
            </svg>
            Requests
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-body-emphasis">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#007AFF"
            >
              <use xlinkHref={`${bootstrapIcons}#grid`} />
            </svg>
            Products
          </a>
        </li>
        <li>
          {/* <a href="vendors.html" className="nav-link active"> */}
          <Link to="vendors" className="nav-link">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#007AFF"
            >
              <use xlinkHref={`${bootstrapIcons}#building`} />
            </svg>
            Vendors
          </Link>
          {/* </a> */}
        </li>
        <li>
          <a href="users.html" className="nav-link link-body-emphasis">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#007AFF"
            >
              <use xlinkHref={`${bootstrapIcons}#people`} />
            </svg>
            Users
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
