import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VendorsPage from "./vendors/VendorsPage";
import ErrorPage from "./ErrorPage.tsx";
import UsersPage from "./users/UsersPage.tsx";
import ProductsPage from "./products/ProductsPage.tsx";
import RequestsPage from "./requests/RequestsPage.tsx";
import VendorCreatePage from "./vendors/VendorCreatePage.tsx";
import VendorEditPage from "./vendors/VendorEditPage.tsx";
import ProductCreatePage from "./products/ProductCreatePage.tsx";
import ProductEditPage from "./products/ProductEditPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "requests",
        element: <RequestsPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/create",
        element: <ProductCreatePage />,
      },
      {
        path: "products/edit/:id",
        element: <ProductEditPage />,
      },
      {
        path: "vendors",
        element: <VendorsPage />,
      },
      {
        path: "vendors/create",
        element: <VendorCreatePage />,
      },
      {
        path: "vendors/edit/:id",
        element: <VendorEditPage />,
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
