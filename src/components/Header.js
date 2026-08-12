import React from 'react'
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form
} from "react-bootstrap";
import {ToCartOutLine} from "react-icon"
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="">
            Pizza House
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="pizza-navbar" />

          <Navbar.Collapse id="pizza-navbar">
            <Nav className="ms-auto me-3">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Products</Nav.Link>
              <Nav.Link>Men</Nav.Link>
              <Nav.Link>Women</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
            <ToCartOutLine></ToCartOutLine>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}

export default Header
