import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { IProduct } from "./IProduct";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Dropdown from "react-bootstrap/Dropdown";
import { formatPhoneNumber } from "../utility/formatUtilities";

interface IProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: IProductCardProps) {
  return (
    <Card className="" style={{ width: "23rem" }}>
      <ProgressBar now={40} variant="secondary" />
      <address className="py-4 px-4">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <span className="badge text-dark bg-secondary-subtle">
              {product.partNbr}
            </span>{" "}
          </span>
          <Dropdown className="d-inline">
            <Dropdown.Toggle
              className="btn btn-light"
              style={{ background: "none" }}
            >
              <svg
                className="bi pe-none me-2"
                width={20}
                height={20}
                fill="#007AFF"
              >
                <use xlinkHref={`${bootstrapIcons}#three-dots-vertical`} />
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="a" href="#">
                Edit
              </Dropdown.Item>
              <Dropdown.Item as="a" href="#">
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <br />
        <span className="fs-4 lh-l fw-medium">{product.name}</span>
        <br />
        <span className="fs-5 fw-light">${product.price}</span>{" "}
        <span className="text-lowercase fw-light">{product.unit}</span>
        <br />
        {/* <abbr title="Phone">P:</abbr> */}
        <span className="fw-light">Vendor: {product.vendor.name}</span>
        <br />
        {product.email}
      </address>
    </Card>
  );
}

export default ProductCard;
