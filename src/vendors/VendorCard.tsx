import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { IVendor } from "./IVendor";

function formatPhoneNumber(phoneNumber: string) {
  const first3Digits = phoneNumber.substring(0, 3);
  const middle3Digits = phoneNumber.substring(3, 6);
  const last3Digits = phoneNumber.substring(6, 10);
  return `(${first3Digits}) ${middle3Digits}-${last3Digits} `;
}

function VendorCard({ vendor }) {
  return (
    <div className="card w-25">
      <div className="progress">
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "60%" }}
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <address className="py-4 px-4">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            {" "}
            <strong>{vendor.name}</strong>{" "}
            <span className="badge text-bg-secondary">{vendor.code}</span>{" "}
          </span>
          <div className="dropdown d-inline">
            <button
              className="btn btn-light"
              style={{ background: "none" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                className="bi pe-none me-2"
                width={20}
                height={20}
                fill="#007AFF"
              >
                <use xlinkHref={`${bootstrapIcons}#three-dots-vertical`} />
              </svg>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="vendor-edit.html"
                  className="dropdown-item"
                  type="button"
                >
                  Edit
                </a>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() =>
                    confirm("Are you sure you want to delete this vendor?")
                  }
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
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
    </div>
  );
}

export default VendorCard;
