import React from "react";
import { Route, Switch, Redirect } from "react-router";

import App from "./App";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 2000);
  }
  render = () => {
    let redirect, route, loader;

    redirect = this.state.loaded ? (
      <Redirect to="/simulador-rentabilidade-arrendamento-tradicional" />
    ) : null;

    route = this.state.loaded ? (
      <Route path="*" render={props => <App {...props} />} />
    ) : null;
    loader = !this.state.loaded ? (
      <div id="circle">
        <div class="loader">
          <div class="loader">
            <div class="loader">
              <div class="loader" />
            </div>
          </div>
        </div>
      </div>
    ) : null;
    return (
      <React.Fragment>
        {this.props.location.pathname === "/" ? redirect : null}
        <Switch>{route}</Switch>
        {loader}
      </React.Fragment>
    );
  };
}

export default Landing;
