import bootstrapIcons from "../assets/bootstrap-icons.svg";

function VendorsPage() {
  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Vendors</h2>
        <a href="vendor-create.html" className="btn btn-primary">
          <svg
            className="bi pe-none me-2"
            width={32}
            height={32}
            fill="#FFFFFF"
          >
            <use xlinkHref={`${bootstrapIcons}#plus`} />
          </svg>
          Create a vendor
        </a>
      </div>
      <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
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
                <strong>Amazon</strong>{" "}
                <span className="badge text-bg-secondary">AMAZ</span>{" "}
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
            123 Amazon Way
            <br />
            Seattle, WA 83474
            <br />
            {/* <abbr title="Phone">P:</abbr> */}
            (800) 454-7890
            <br />
            primebusiness@amazon.com
          </address>
        </div>
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
                <strong>TechSolutions Inc.</strong>{" "}
                <span className="badge text-bg-secondary">TS Inc.</span>
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
                    <button className="dropdown-item" type="button">
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            123 Main Street <br />
            Anytown, USA <br />
            (555) 123-4567 <br />
            purchasing@techsolutions.com
          </address>
        </div>
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
                <strong>Global Trade Enterprises</strong>{" "}
                <span className="badge text-bg-secondary">GTE</span>
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
                    <button className="dropdown-item" type="button">
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            456 Oak Avenue <br />
            Metro City, Canada <br />
            (555) 987-6543 <br />
            procurement@globaltradeent.com
          </address>
        </div>
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
                <strong>Precision Manufacturing Group</strong>{" "}
                <span className="badge text-bg-secondary">PMG</span>
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
                    <button className="dropdown-item" type="button">
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            789 Elm Street <br />
            Industrial Zone, Europe <br />
            +44 1234 567890 <br />
            purchasing@precisionmfggrp.com
          </address>
        </div>
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
                <strong>EcoFarms Co.</strong>{" "}
                <span className="badge text-bg-secondary">EFC</span>
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
                    <button className="dropdown-item" type="button">
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            321 Green Way <br />
            Agro Valley, Australia <br />
            +61 1234 5678 <br />
            procurement@ecofarmsco.com
          </address>
        </div>
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
                <strong>HealthCare Solutions Ltd.</strong>
                <span className="badge text-bg-secondary">HCS Ltd.</span>
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
                    <button className="dropdown-item" type="button">
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            888 Wellness Lane <br />
            Medical District, Europe <br />
            +44 9876 543210 <br />
            purchasing@healthcaresolutions.com
          </address>
        </div>
      </section>
    </section>
  );
}
export default VendorsPage;
