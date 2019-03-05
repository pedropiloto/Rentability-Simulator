import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";

import { Nav } from "reactstrap";
import logo from "assets/img/logo.png";

var ps;

class Sidebar extends React.Component {
  activeRoute = routeName =>
    this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  render() {
    const { routes } = this.props;
    return (
      <div className="sidebar" data="blue">
        <div className="sidebar-wrapper" ref="sidebar">
          (
          <div className="logo">
            <a
              className="simple-text logo-mini"
              target="_blank"
              onClick={this.props.toggleSidebar}
            >
              <div className="logo-img">
                <img src={logo} alt="logótipo investemais" />
              </div>
            </a>{" "}
            <span className="simple-text" onClick={this.props.toggleSidebar}>
              Investe Mais
            </span>
          </div>
          )
          <Nav>
            {routes.map((prop, key) => (
              <li
                className={
                  this.activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.path}
                  className="nav-link"
                  activeClassName="active"
                  onClick={this.props.toggleSidebar}
                >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            ))}
          </Nav>
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}]
};

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object)
};

export default Sidebar;
