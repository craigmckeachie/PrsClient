// import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import bootstrapIcons from "./assets/bootstrap-icons.svg";

function App() {
  return (
    <>
      <header>
        <svg className="bi pe-none me-2" width={32} height={32} fill="#000000">
          <use xlinkHref={`${bootstrapIcons}#plus`} />
        </svg>
      </header>
      <main>
        <h3>Ready</h3>
      </main>
    </>
  );
}

export default App;
