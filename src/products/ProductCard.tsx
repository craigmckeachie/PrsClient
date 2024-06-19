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
    <Card className="w-25">
      <ProgressBar now={60} />
      <address className="py-4 px-4">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <strong>{product.name}</strong>{" "}
            <span className="badge text-bg-secondary">{product.partNbr}</span>{" "}
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
       
        ${product.price} {product.unit}
        <br />
        {/* <abbr title="Phone">P:</abbr> */}
        Vendor: {product.vendor.name}
        <br />
        {product.email}
      </address>
    </Card>
  );
}

export default ProductCard;
