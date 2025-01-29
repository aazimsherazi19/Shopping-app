import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../store/index.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
