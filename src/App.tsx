// import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import AppNav from "./AppNav";


function App() {
  return (
    <>
      <Header />
      <main className="d-flex">
        <AppNav />
      </main>
    </>
  );
}

export default App;
