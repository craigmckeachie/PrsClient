import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { IVendor } from "./IVendor";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Dropdown from "react-bootstrap/Dropdown";
import { formatPhoneNumber } from "../utility/formatUtilities";

interface IVendorCardProps {
  vendor: IVendor;
}

function VendorCard({ vendor }: IVendorCardProps) {
  return (
    <Card className="w-25">
      <ProgressBar now={60} />
      <address className="py-4 px-4">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <strong>{vendor.name}</strong> <br />
            <span className="badge bg-secondary ">{vendor.code}</span>{" "}
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
        <div className="text-secondary">{vendor.address}</div>

        <div className="text-secondary">
          {vendor.city}, {vendor.state} {vendor.zip}
        </div>

        {/* <abbr title="Phone">P:</abbr> */}
        <div className="text-secondary">{formatPhoneNumber(vendor.phone)}</div>

        <div className="text-secondary">{vendor.email}</div>
      </address>
    </Card>
  );
}

export default VendorCard;
