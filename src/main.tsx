import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import CountryPage from "./pages/CountryPage";
import IndexPage from "./index";

const router = createHashRouter([
  { path: "/", element: <IndexPage /> },
  { path: "/countryPage/:name", element: <CountryPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
