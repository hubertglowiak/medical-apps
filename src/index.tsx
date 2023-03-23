import "antd/dist/antd.min.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./wrappers/app";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Cannot find root element in DOM");
}

const root = ReactDOM.createRoot(container);

root.render(<App />);
