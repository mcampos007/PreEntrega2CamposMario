import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget"
import logo from "../assets/logo_axion.png"
//import logo from "../../assets/logo.png"
export const NavBar = () =>{
    return (
        <Navbar bg="dark" className='container-fluid' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img 
              src={logo}
              height="60"
              className='d-inline-block align-top'
              alt="logo"            
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/bar" as={NavLink}>BAR</Nav.Link>
            <Nav.Link to="/category/bebidas" as={NavLink}>BEBIDAS</Nav.Link>
            <Nav.Link to="/category/cigarrillos" as={NavLink}>CIGARRILLOS</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
       
      </Navbar>
    )
}



