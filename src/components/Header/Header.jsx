import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./header.css"

function Header({ homeRef, skillRef, aboutRef, contactRef }) {
  const [activeItem, setActiveItem] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= contactRef.current.offsetTop) {
        setActiveItem('CONTACT');
      } else if (scrollPosition >= skillRef.current.offsetTop) {
        setActiveItem('SKILLS');
      } else if (scrollPosition >= aboutRef.current.offsetTop) {
        setActiveItem('ABOUT');
      } else {
        setActiveItem('HOME');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [homeRef, skillRef, aboutRef, contactRef]);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand  className="fw-bold" onClick={() => scrollToRef(homeRef)}>Amruta Hegde</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className={`px-3 ${activeItem === 'HOME' ? 'active' : ''}`} onClick={() => scrollToRef(homeRef)}>HOME</Nav.Link>
            <Nav.Link className={`px-3 ${activeItem === 'ABOUT' ? 'active' : ''}`} onClick={() => scrollToRef(aboutRef)}>ABOUT</Nav.Link>
            <Nav.Link className={`px-3 ${activeItem === 'SKILLS' ? 'active' : ''}`} onClick={() => scrollToRef(skillRef)}>SKILLS</Nav.Link>
            <Nav.Link className={`px-3 ${activeItem === 'CONTACT' ? 'active' : ''}`} onClick={() => scrollToRef(contactRef)}>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
