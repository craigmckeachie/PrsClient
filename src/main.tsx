import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VendorsPage from "./vendors/VendorsPage";
import ErrorPage from "./ErrorPage.tsx";
import UsersPage from "./users/UsersPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "vendors",
        element: <VendorsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
