import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// append to body, we're creating a widget
const div = document.createElement("div");
document.body.appendChild(div);

const chatId =
  process.env.NODE_ENV === "development"
    ? "TEST-ID"
    : document
        .querySelector("script[data-chat-id]")
        ?.getAttribute("data-chat-id");

console.log('chatId', chatId);

ReactDOM.createRoot(div).render(
  <React.StrictMode>
    <App chatId={chatId} />
  </React.StrictMode>
);
