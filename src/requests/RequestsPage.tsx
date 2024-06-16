import bootstrapIcons from "../assets/bootstrap-icons.svg";

function RequestsPage() {
  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Requests</h2>
        <a href="request-create.html" className="btn btn-primary">
          <svg
            className="bi pe-none me-2"
            width={32}
            height={32}
            fill="#FFFFFF"
          >
            <use xlinkHref={`${bootstrapIcons}#plus`} />
          </svg>
          Create a request
        </a>
      </div>
      <div className="d-flex flex-column mb-4 w-25">
        <label htmlFor="status" className="form-label">
          Status
        </label>
        <select id="status" className="form-select">
          <option value>All</option>
          <option value>New</option>
          <option value>Pending Review</option>
          <option value>Approved</option>
        </select>
      </div>
      <section className="list d-flex flex-row flex-wrap bg-body-tertiary gap-5 p-4 rounded-4">
        <table className="table table-hover w-75 table rounded-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
              <th scope="col">Requested By</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                Supplies for Offsite Meeting <br />
                <span className="text-body-secondary small text-wrap">
                  Team Building/Goal Setting
                </span>
              </td>
              <td>
                <span className="badge text-bg-info">New</span>
              </td>
              <td>$600</td>
              <td>
                Otto Graham
                <br />
                <span className="text-body-secondary small text-wrap">
                  Pickup
                </span>
              </td>
              <td>
                <div className="dropdown">
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
                      <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="request-view.html"
                        className="dropdown-item"
                        type="button"
                      >
                        View
                      </a>
                    </li>
                    <li>
                      <a
                        href="request-edit.html"
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
                          confirm(
                            "Are you sure you want to delete this request?"
                          )
                        }
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                Office Supplies
                <br />
                <span className="text-body-secondary small text-wrap">
                  Budgeted Materials
                </span>
              </td>
              <td>
                <span className="badge text-bg-warning">Pending Review</span>
              </td>
              <td>$1200</td>
              <td>
                Dave Mathews
                <br />
                <span className="text-body-secondary small text-wrap">
                  Delivery
                </span>
              </td>
              <td>
                <div className="dropdown">
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
                      <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="request-view.html"
                        className="dropdown-item"
                        type="button"
                      >
                        Review
                      </a>
                    </li>
                    <li>
                      <a
                        href="request-edit.html"
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
                        onclick="confirm('Are you sure you want to delete this request?')"
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                Routers
                <br />
                <span className="text-body-secondary small text-wrap">
                  Improve Network Speed
                </span>
              </td>
              <td>
                <span className="badge text-bg-success">Approved</span>
              </td>
              <td>$20,000</td>
              <td>
                Ron Weasley
                <br />
                <span className="text-body-secondary small text-wrap">
                  Signature Delivery
                </span>
              </td>
              <td>
                <div className="dropdown">
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
                      <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="request-view.html"
                        className="dropdown-item"
                        type="button"
                      >
                        Review
                      </a>
                    </li>
                    <li>
                      <a
                        href="request-edit.html"
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
                        onclick="confirm('Are you sure you want to delete this request?')"
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                Storage Cabinet <br />
                <span className="text-body-secondary small text-wrap">
                  Securely Store Legal Documents
                </span>
              </td>
              <td>
                <span className="badge text-bg-info">New</span>
              </td>
              <td>$325</td>
              <td>
                Kathleen Madigan
                <br />
                <span className="text-body-secondary small text-wrap">
                  Pickup
                </span>
              </td>
              <td>
                <div className="dropdown">
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
                      <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="request-view.html"
                        className="dropdown-item"
                        type="button"
                      >
                        View
                      </a>
                    </li>
                    <li>
                      <a
                        href="request-edit.html"
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
                        onclick="confirm('Are you sure you want to delete this request?')"
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
    // <div
    //   className="slanted bg-gradient bg-secondary-subtle z-n1 position-absolute"
    //   style={{height: 6rem; width: 100%; top: 65%}}
    // ></div>
  );
}

export default RequestsPage;
