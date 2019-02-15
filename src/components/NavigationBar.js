import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import { Navbar, Container } from "reactstrap";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar
          className={classNames("navbar-absolute", "navbae-transparent")}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classNames("navbar-toggle d-inline", {
                  toggled: this.props.sidebarOpened
                })}
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.props.toggleSidebar}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavigationBar;
