// import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";

// import bootstrapIcons from "./assets/bootstrap-icons.svg";
// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
      {/* <header>
        <Button>Primary</Button>
        <svg className="bi pe-none me-2" width={32} height={32} fill="#000000">
          <use xlinkHref={`${bootstrapIcons}#plus`} />
        </svg>
      </header> */}
      <Header/>
      <main>
        <h3>Ready</h3>
      </main>
    </>
  );
}

export default App;
