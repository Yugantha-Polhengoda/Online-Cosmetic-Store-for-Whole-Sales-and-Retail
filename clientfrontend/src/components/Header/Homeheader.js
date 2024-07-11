import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Homeheader = (props) => {
  return (
    /*<div className="headerbg">
        <h1>Beauty Cosmatic & Skin Care</h1>
      </div>*/
    <>
      <Navbar style={{ background: "#bfc1c2" }} bg="light" expand="lg">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="imglogo2" src="/images/logo2.png" alt="" />
            </Navbar.Brand>
          </LinkContainer>

          <LinkContainer to="/">
            <Navbar.Brand>ATL Beauty</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-2"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link href="#action1">&nbsp;&nbsp;&nbsp; Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/">
                <Nav.Link href="#action1">About</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/">
                <Nav.Link href="#action1">Contact</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Category" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Perfumes</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Skin cares</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Hair oils</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Beauty Products
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <LinkContainer to="/Shopping-Cart">
              <Nav.Link className="p-2" href="#action1">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                &nbsp; Cart (0)
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Sign-In">
              <Nav.Link className="p-4" href="#action1">
                <i className="fa fa-user" aria-hidden="true"></i>
                &nbsp; Sign-In
              </Nav.Link>
            </LinkContainer>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Your Product"
                className="me-2"
                aria-label="Search"
              />
              <Button className="search" variant="outline">
                <h5>Search</h5>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Homeheader;
