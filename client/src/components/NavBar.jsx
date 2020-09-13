import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button'
import {Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
    <Navbar.Toggle />
    <Navbar.Collapse>
    <Navbar.Brand>
      <img
        alt=""
        src="../logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Second Brain
    </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item>
          <Nav.Link eventKey="1" as={Link} to="/Home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="2" as={Link} to="/Meals">
            Record Meals
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="3" as={Link} to="/Data">
            Data
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default NavBar;
