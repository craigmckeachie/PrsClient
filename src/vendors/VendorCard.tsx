import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { IVendor } from "./IVendor";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Dropdown from "react-bootstrap/Dropdown";

function formatPhoneNumber(phoneNumber: string) {
  const first3Digits = phoneNumber.substring(0, 3);
  const middle3Digits = phoneNumber.substring(3, 6);
  const last3Digits = phoneNumber.substring(6, 10);
  return `(${first3Digits}) ${middle3Digits}-${last3Digits} `;
}

interface IVendorCardProps {
  vendor: IVendor;
}

function VendorCard({ vendor }: IVendorCardProps) {
  return (
    <>
      <Card className="w-25">
        <ProgressBar now={60} />
        <address className="py-4 px-4">
          <div className="d-flex justify-content-between align-items-center">
            <span>
              <strong>{vendor.name}</strong>{" "}
              <span className="badge text-bg-secondary">{vendor.code}</span>{" "}
            </span>
            <Dropdown className="d-inline">
              <Dropdown.Toggle
                as="button"
                variant="light"
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
          {vendor.address}
          <br />
          {vendor.city}, {vendor.state} {vendor.zip}
          <br />
          {/* <abbr title="Phone">P:</abbr> */}
          {formatPhoneNumber(vendor.phone)}
          <br />
          {vendor.email}
        </address>
      </Card>
     
    </>
  );
}

export default VendorCard;
