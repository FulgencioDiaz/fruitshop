import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="color-nav" variant="dark">
      <Container className="d-flex">
        <Link className="navbar-brand" to="/">
         PAPAYAPP
        </Link>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            Inicio
          </NavLink>
          <NavLink className="nav-link" to="/">
            Landings
          </NavLink>
          <NavLink className="nav-link" to="/products">
            Catálogo
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
