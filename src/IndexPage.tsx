import { Link, useNavigate } from "react-router-dom";
import bootstrapIcons from "./assets/bootstrap-icons.svg";
import { useUserContext } from "./App";

function IndexPage() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  if (!user) {
    navigate("/signin");
  } else {
    navigate("/requests");
  }

  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2 ">
        <h2>Purchase Request System</h2>
      </div>
      <p>This application will allow you to make purchase requests.</p>
    </section>
  );
}

export default IndexPage;
