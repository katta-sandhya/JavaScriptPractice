import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CometChat } from "@cometchat-pro/chat";

// Replace with your actual CometChat credentials
const appID = "2722097ff6de7695"; // Your CometChat App ID
const region = "in"; // Your region (e.g., "us", "eu", "in")

const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region) // <-- This ensures the correct region is set
  .build();

// Proper CometChat Initialization
CometChat.init(appID, appSetting)
  .then(() => console.log("✅ CometChat Initialized Successfully"))
  .catch((error) => console.error("❌ CometChat Initialization Failed", error));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
