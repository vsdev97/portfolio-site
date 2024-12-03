import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";

// Create the root element for rendering the React app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Add type assertion
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
