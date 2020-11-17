import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = ({ userId }) => {
  return (
    <Col md={{ span: 2 }} className="navbar">
      <div className="d-flex flex-column  mx-auto bd-highlight">
        <Link to={`/Profile/${userId}`}>Profile</Link>
        <hr />
        <Link to={`/Post/${userId}`}>Post</Link>
        <hr />
        <Link to={`/Gallery/${userId}`}>Gallery</Link>
        <hr />
        <Link to={`/ToDo/${userId}`}>ToDo</Link>
      </div>
    </Col>
  );
};

export default Navigation;
