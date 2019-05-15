import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">TV SHOWS</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/library">Library</Link>
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
