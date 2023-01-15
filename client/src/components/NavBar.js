import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faCartPlus } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faCartPlus} size="2x" color="white" />
        <Nav.Item className='ms-auto'>
  

       <Nav.Link as={Link} to='/auth' className="login-button">
                        Login
                    </Nav.Link>
        </Nav.Item>
        
      </Container>
      <img className="nav-img" src="https://res.cloudinary.com/dkcp72omy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611681/products/platanogun_pkamwq.jpg"/>
    </Navbar>
  );
};

export default NavBar;
