// import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";




function App() {
  return (
    <>
      <Header />
      <main className="d-flex">
        <AppNav />
        <Outlet/>
      </main>
    </>
  );
}

export default App;
