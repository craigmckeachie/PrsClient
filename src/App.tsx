import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#0d6efd",
              secondary: "white",
            },
          },
        }}
      />
      <Header />
      <main className="d-flex">
        <AppNav />
        <Outlet />
      </main>
    </>
  );
}

export default App;
