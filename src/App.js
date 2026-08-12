import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
  Footer,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const pizzas = [
    {
      id: 1,
      name: "ao nam 1",
      image: "/Images/nam1.jpg",
      price: 14,
    },
    {
      id: 2,
      name: "ao nam 2",
      image: "/Images/nam2.jpg",
      price: 17,
    },
    {
      id: 3,
      name: "ao nam 3",
      image: "/Images/nam3.jpg",
      price: 16,
    },
    {
      id: 4,
      name: "ao nu 1",
      image: "/Images/Nu1.jpg",
      price: 17,
    },
    {
      id: 5,
      name: "ao nu 2",
      image: "/Images/Nu2.jpg",
      price: 17,
    },
    {
      id: 6,
      name: "ao nu 3",
      image: "/Images/Nu3.jpg",
      price: 17,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your booking request has been sent!");
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Card.Img src="./Images/logo.jpg " style={{height:'50px', width:'100px'}}/>

          <Navbar.Toggle aria-controls="pizza-navbar" />

          <Navbar.Collapse id="pizza-navbar">
            <Nav className="ms-auto me-3">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Products</Nav.Link>
              <Nav.Link>Men</Nav.Link>
              <Nav.Link>Women</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ================= HERO ================= */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>SUMMER UP TO 50%</h1>
          <p>Authentic Italian</p>
        </div>
      </section>

      {/* ================= MENU ================= */}
      <section className="menu-section">
        <Container>
          <h2 className="text-center text-white mb-5">Our Menu</h2>

          <Row>
            {pizzas.map((pizza) => (
              <Col
                key={pizza.id}
                xs={12}
                sm={6}
                md={4}
                className="mb-3"
              >
                <Card className="pizza-card h-100">
                  <div className="image-wrapper">
                    <Badge bg="warning" text="dark" className="sale-badge">
                      SALE
                    </Badge>

                    <Card.Img
                      variant="top"
                      src={pizza.image}
                      alt={pizza.name}
                    />
                  </div>

                  <Card.Body className="text-center">
                    <Card.Title>{pizza.name}</Card.Title>

                  <Card.Text>Price: {pizza.price}</Card.Text>

                    <Button
                    
                      className="w-100 mt-3 primay variant blue"
                      onClick={() =>
                        alert(`You selected ${pizza.name}`)
                      }
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer>
     <text>Student Name: Vu Ngoc Quoc Anh</text>
     <text>Student ID: HE182441</text>
     <text>CLass Name: Fer202_BL5</text>
     <text>Email: anhvnqhe182441@fpt.edu.vn</text>
      </footer>
    </div>
  );
}

export default App;