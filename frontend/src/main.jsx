import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Shop from "../src/pages/Shop.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Login  from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path:"/contacto",
    element:<Contact/>
  },
  {
    path:"/login",
    element:<Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
