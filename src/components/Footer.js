/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <div className="copyright">
            © {new Date().getFullYear()} by{" "}
            <a
              href="https://pedropiloto.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Pedro Piloto
            </a>{" "}
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
