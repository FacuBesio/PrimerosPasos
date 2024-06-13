import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from "./config/config.js";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/context.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    {/* <React.StrictMode> */}
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </Auth0Provider>
);
