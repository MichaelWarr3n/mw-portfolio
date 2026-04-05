import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App.jsx";
import "./global-styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
