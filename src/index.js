import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import createStore from "./store/config";

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import Landing from "./landing";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={createStore()}>
    <Router history={hist}>
      <Switch>
        <Route path="/" render={props => <Landing {...props} />} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
