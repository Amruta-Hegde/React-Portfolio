import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./header.css";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home">Amruta Hegde</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="px-3" href="#features">HOME</Nav.Link>
            <Nav.Link className="px-3" href="#pricing">ABOUT</Nav.Link>
            <Nav.Link className="px-3" href="#about">PROJECTS</Nav.Link>
            <Nav.Link className="px-3" href="#login">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
