import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/header.css';

const Header = () => {
  return (
    <Container id="header" fluid>
      <Navbar className="main__navbar" expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand id="main__logo" href="#header">fE()</Navbar.Brand>
        <Nav className="main__nav" id="main__nav">
          <Nav.Link className="nav__item" href="#about">About</Nav.Link>
          <Nav.Link href="nav__item">Tutorials</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default Header