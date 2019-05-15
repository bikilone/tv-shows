import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Col
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="#home">TV SHOWS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Library</Nav.Link>
        </Nav>
        <Nav>
          <Form inline>
            <Form.Row>
              <Col>
                <FormControl
                  type="text"
                  placeholder="Search"
                  style={{ display: "inline-block" }}
                />
              </Col>
              <Col>
                <Button variant="outline-info">Search</Button>
              </Col>
            </Form.Row>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
