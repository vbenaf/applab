import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import GlobalStyles from "./global.css";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/";
const root = ReactDOM.createRoot(document.getElementById("root"));
const user = "null";
const store = createStore(reducers, compose(applyMiddleware(thunk)));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={user ? <App /> : <Auth />}>
          <Route path="/" element={<Home />} />
          <Route path="/crear-document" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
