import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import App from "App";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" render={props => <App {...props} />} />
      <Redirect
        from="/"
        to="/simulador-rentabilidade-arrendamento-tradicional"
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
