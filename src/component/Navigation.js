import React from "react";
import { Col, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = ({ userId }) => {
  return (
    <Col md={{ span: 3 }}>
      <Navbar bg="light" className="navbar" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex flex-column mx-auto">
            <Link to={`/Profile/${userId}`}>Profile</Link>
            <hr />
            <Link to={`/Post/${userId}`}>Post</Link>
            <hr />
            <Link to={`/Gallery/${userId}`}>Gallery</Link>
            <hr />
            <Link to={`/ToDo/${userId}`}>ToDo</Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default Navigation;
