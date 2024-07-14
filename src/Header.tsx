// import userProfileImage from "./assets/users/image-34.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useUserContext } from "./App";

function Header() {
  const { user } = useUserContext();

  return (
    <header>
      <div className="navbar bg-body-tertiary py-4 border-bottom">
        <div className="container-fluid">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg
              id="logo-35"
              width={50}
              height={39}
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
            <span className="small mx-2 fw-semibold">
              Purchase Request System
            </span>
          </a>

          <Dropdown className="me-4">
            <Dropdown.Toggle
              as="a"
              variant="light"
              className="d-flex text-secondary align-items-center link-body-emphasis text-decoration-none"
            >
              <div
                style={{ width: "3rem", height: "3rem" }}
                className="d-flex bg-primary-subtle fs-5 text-secondary align-items-center justify-content-center rounded-circle me-2"
              >
                {user?.firstname.substring(0, 1)}
                {user?.lastname.substring(0, 1)}
              </div>
              <strong>
                {" "}
                {user?.firstname} {user?.lastname}
              </strong>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Item href="#">Profile action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to={"/signin"}>
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default Header;
