import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Shop from "../src/pages/Shop.jsx";

import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/productDetail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-3asxlihqmgbpca5q.us.auth0.com"
    clientId="2FRtNeBBnSgmWmiv080Da9FqcPPnCFbB"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  </Auth0Provider>
);
