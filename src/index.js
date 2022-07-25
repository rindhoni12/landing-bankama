import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { ThemeContextProvider } from "./config/themeContext";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
