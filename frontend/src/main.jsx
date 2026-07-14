import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import "./styles/index.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          duration: 4000,
        }}
      />

      <App />
    </HelmetProvider>
  </React.StrictMode>
);