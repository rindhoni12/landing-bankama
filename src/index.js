import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { HelmetProvider } from "react-helmet-async";
import { ThemeContextProvider } from "./config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </ThemeContextProvider>
);
