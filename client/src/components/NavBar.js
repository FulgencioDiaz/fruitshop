import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import AuthConsumer from "../hooks/useAuth";


const NavBar = () => {
  const [{ isAuth, isAdmin }] = AuthConsumer();
  return (
    <Navbar className="color-nav" >
    <Container fluid>
        <Link className="navbar-brand" to="/">
          FRUITShop
        </Link>
        <Nav className="me-auto">

          {!isAuth && (
            <>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/registro">
                Registro
              </NavLink>
            </>
          )}
          {isAuth && (
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          )}
         
        </Nav>
        <a href="/cart">
        <FontAwesomeIcon icon={faCartPlus} size="2x" color="white"  />
        </a> 


      </Container>
      <img className="nav-img" alt="Banana gun" src="https://res.cloudinary.com/dkcp72omy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673611681/products/platanogun_pkamwq.jpg"/>
    </Navbar>
  );
};

export default NavBar;

