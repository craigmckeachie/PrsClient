function UsersPage() {
  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex align-items-baseline justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Users</h2>
        <div
          className="toast align-items-center text-bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              <svg
                className="bi pe-none me-2"
                width={32}
                height={32}
                fill="#ffffff"
              >
                <use xlinkHref="./images/bootstrap-icons.svg#check" />
              </svg>
              Successfully saved
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
        </div>
        <a href="user-create.html" className="btn btn-primary">
          <svg
            className="bi pe-none me-2"
            width={32}
            height={32}
            fill="#FFFFFF"
          >
            <use xlinkHref="./images/bootstrap-icons.svg#plus" />
          </svg>
          Create a user
        </a>
      </div>
      <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-1.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">Solange Edial</strong>
            <br />
            <span className="text-secondary">Admin</span>
            <br />
            <span className="text-secondary">(431) 987-2837</span>
            <br />
            <a href="mailto:sedial@yahoo.com" title="sedial@yahoo.com">
              Email user
            </a>
          </address>
        </div>
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-2.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">Kimbeye Rodsiks</strong>
            <br />
            <span className="text-secondary">Reviewer</span>
            <br />
            <span className="text-secondary">(617) 567-3289</span>
            <br />
            <a href="mailto:jmask34@gmail.com" title="jmask34@gmail.com">
              Email user
            </a>
          </address>
        </div>
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-3.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">Simon Hungley</strong>
            <br />
            <span className="text-secondary">Reviewer</span>
            <br />
            <span className="text-secondary">(717) 385-0934</span>
            <br />
            <a
              href="mailto:simon.hungleye@live.com"
              title="simon.hungleye@live.com"
            >
              Email user
            </a>
          </address>
        </div>
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-4.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">James Maskellen</strong>
            <br />
            <span className="text-secondary">Reviewer</span>
            <br />
            <span className="text-secondary">(617) 567-3289</span>
            <br />
            <a href="mailto:jmask34@gmail.com" title="jmask34@gmail.com">
              Email user
            </a>
          </address>
        </div>
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-5.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">Bill Scalley</strong>
            <br />
            <span className="text-secondary">Admin</span>
            <br />
            <span className="text-secondary">(735) 873-0193</span>
            <br />
            <a href="mailto:jmask34@gmail.com" title="jmask34@gmail.com">
              Email user
            </a>
          </address>
        </div>
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-6.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">Edwin Bostich</strong>
            <br />
            <span className="text-secondary">Reviewer</span>
            <br />
            <span className="text-secondary">(617) 567-3289</span>
            <br />
            <a href="mailto:jmask34@gmail.com" title="jmask34@gmail.com">
              Email user
            </a>
          </address>
        </div>
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-7.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">Rhonda Levitan</strong>
            <br />
            <span className="text-secondary">Reviewer</span>
            <br />
            <span className="text-secondary">(717) 385-0934</span>
            <br />
            <a href="mailto:jmask34@gmail.com" title="jmask34@gmail.com">
              Email user
            </a>
          </address>
        </div>
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-8.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">Joan Sizemore</strong>
            <br />
            <span className="text-secondary">Admin</span>
            <br />
            <span className="text-secondary">(617) 567-3289</span>
            <br />
            <a href="mailto:jmask34@gmail.com" title="jmask34@gmail.com">
              Email user
            </a>
          </address>
        </div>
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-9.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">Annabelle Tungsley</strong>
            <br />
            <span className="text-secondary">Reviewer</span>
            <br />
            <span className="text-secondary">(717) 385-0934</span>
            <br />
            <a href="mailto:jmask34@gmail.com" title="jmask34@gmail.com">
              Email user
            </a>
          </address>
        </div>
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-10.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">Evan Shepard</strong>
            <br />
            <span className="text-secondary">Admin</span>
            <br />
            <span className="text-secondary">(617) 567-3289</span>
            <br />
            <a href="mailto:jmask34@gmail.com" title="jmask34@gmail.com">
              Email user
            </a>
          </address>
        </div>
        <div className="d-flex gap-4 w-25">
          <img
            src="/images/users/image-11.png"
            alt
            width={96}
            height={96}
            className="rounded-circle me-2"
          />
          <address>
            <strong title="cmckeachie">Lauren Victor</strong>
            <br />
            <span className="text-secondary">Reviewer</span>
            <br />
            <span className="text-secondary">(717) 385-0934</span>
            <br />
            <a href="mailto:jmask34@gmail.com" title="jmask34@gmail.com">
              Email user
            </a>
          </address>
        </div>
      </section>
    </section>
  );
}

export default UsersPage;
