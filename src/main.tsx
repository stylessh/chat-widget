import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// append to body, we're creating a widget
const div = document.createElement("div");
document.body.appendChild(div);

ReactDOM.createRoot(div).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
