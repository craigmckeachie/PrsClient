import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import bootstrapIcons from "./assets/bootstrap-icons.svg";

function AppNav() {
  return (
    <>
      <Nav
        variant="pills"
        // defaultActiveKey="/vendors"
        // activeKey="/vendors"
        as="ul"
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-end min-vh-100 position-sticky"
        style={{ width: 280 }}
      >
        <a href="" className="mb-4 text-decoration-none fw-bolder">
          <svg
            className="bi pe-none me-2"
            width={16}
            height={16}
            fill="#007AFF"
          >
            <use xlinkHref={`${bootstrapIcons}#plus-circle-fill`} />
          </svg>
          Create new
        </a>
        <Nav.Item as="li" className="text-secondary fw-bold mb-2">
          Purchase
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="/requests" as={Link} to="/requests">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#007AFF"
            >
              <use xlinkHref={`${bootstrapIcons}#cart`} />
            </svg>
            Requests
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="/products" as={Link} to="/products">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#007AFF"
            >
              <use xlinkHref={`${bootstrapIcons}#grid`} />
            </svg>
            Products
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="/vendors" as={Link} to="/vendors">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#007AFF"
            >
              <use xlinkHref={`${bootstrapIcons}#building`} />
            </svg>
            Vendors
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="/users" as={Link} to="/users">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#007AFF"
            >
              <use xlinkHref={`${bootstrapIcons}#people`} />
            </svg>
            Users
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <nav
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-end min-vh-100 position-sticky"
        style={{ width: 280 }}
      >
        <a href="" className="mb-4 text-decoration-none fw-bolder">
          <svg
            className="bi pe-none me-2"
            width={16}
            height={16}
            fill="#007AFF"
          >
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
      </nav> */}
    </>
  );
}

export default AppNav;
