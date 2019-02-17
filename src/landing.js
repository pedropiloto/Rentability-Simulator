import React from "react";
import { Route, Switch, Redirect } from "react-router";

import App from "./App";

class Landing extends React.Component {
  render = () => {
    console.log(this.props.location.pathname);

    return (
      <React.Fragment>
        {this.props.location.pathname === "/" ? (
          <Redirect to="/simulador-rentabilidade-arrendamento-tradicional" />
        ) : null}
        <Switch>
          <Route path="*" render={props => <App {...props} />} />
        </Switch>
      </React.Fragment>
    );
  };
}

export default Landing;
