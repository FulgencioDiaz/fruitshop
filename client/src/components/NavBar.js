import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="color-nav" >
      <Container className="d-flex">
        <Link className="navbar-brand" to="/">
         PAPAYAPP
        </Link>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
           | Inicio
          </NavLink>
          
          <NavLink className="nav-link" to="/products">
            | Catálogo | 
          </NavLink>

          <NavLink className="nav-link" to="/transactions">
            Historial de pedidos |
          </NavLink>
        </Nav>

        <Nav.Item className='ms-auto'>
                    <Nav.Link as={Link} to='/login'>
                        Login
                    </Nav.Link>
        </Nav.Item>
        
      </Container>
    </Navbar>
  );
};

export default NavBar;
