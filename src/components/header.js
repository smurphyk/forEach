import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Container id="header" fluid>
      <Navbar className="main__navbar" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand id="main__logo" href="#header">fE(!D)</Navbar.Brand>
        <Nav className="mr-auto" id="main__nav">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Topics</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default Header