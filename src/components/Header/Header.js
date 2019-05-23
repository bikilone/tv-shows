import React from "react";
import { Navbar, Nav, Form, FormControl, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchTvShows } from "../../redux/actions";

const mapStateToProps = state => ({
  search: state.searchTvShows.search
});

const mapDispatchToProps = dispatch => ({
  searchTvShows: event => dispatch(searchTvShows(event.target.value))
});

const Header = props => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      style={{ marginBottom: "10px" }}
      // fixed="top"
    >
      <Navbar.Brand>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          TV SHOWS
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link> */}
          <Link
            to="/library"
            style={{ color: "#C4C6C8", textDecoration: "none" }}
          >
            LIBRARY
          </Link>
          {/* </Nav.Link> */}
        </Nav>
        <Nav>
          <Form inline>
            <Form.Row>
              <Col>
                <FormControl
                  type="text"
                  placeholder="Search"
                  style={{ display: "inline-block" }}
                  onChange={props.searchTvShows}
                />
              </Col>
              {/* <Col>
                <Button variant="outline-info">Search</Button>
              </Col> */}
            </Form.Row>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
