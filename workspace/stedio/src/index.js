import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import "./clone/steadio.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { legacy_createStore as createStore } from "redux";
import Select from "./clone/module/Select"
import Steadio from "./clone/Steadio";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(Select, devToolsEnhancer());
root.render(
  // <React.StrictMode>
  <>
    <Provider store={store}>
      <Steadio />
    </Provider>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
