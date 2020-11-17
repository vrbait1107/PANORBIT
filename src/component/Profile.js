import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";

const Profile = () => {
  return (
    <Container className="mt-4" fluid>
      <Row>
        <Navigation />
        <Col md={9}>
          <div className="d-flex flex-row justify-content-between">
            <h5>Profile</h5>
            <h5>Vishal Bait</h5>
          </div>
          <hr />
          <Row className="profile font-roboto">
            <Personal />
            <Address />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const Personal = () => {
  return (
    <Col md={{ span: 4, offset: 1 }}>
      <div className="text-center">
        <img
          src="https://github.com/vrbait1107/vrbait1107.github.io/blob/master/images/Vishal%20Bait.jpg?raw=true"
          style={{ height: 200, width: 200 }}
          className="img-fluid rounded-pill"
        />
      </div>

      <h5 className="text-center mt-3">Vishal Bait</h5>

      <div className="mt-3">
        <h5>
          <span>Username : </span>
          vrbait1107
        </h5>
        <h5>
          <span>Email : </span> vishalbait@gmail.com
        </h5>
        <h5>
          <span>Phone : </span> +91 1234567890
        </h5>
        <h5>
          <span>Website : </span>
          https://vrbait.github.io
        </h5>

        <hr />

        <div className="mt-3 ">
          <h5 class="text-center">
            <span>Company</span>
          </h5>

          <h5>
            <span>Name : </span> Google.inc
          </h5>

          <h5>
            <span>CatchPhrase : </span>
            Multi-layer client server
          </h5>

          <h5>
            <span>bs : </span>
            harness real time market
          </h5>
        </div>
      </div>
    </Col>
  );
};

const Address = () => {
  return (
    <Col md={{ span: 6, offset: 1 }}>
      <h5>
        <span>Address:</span>
      </h5>

      <div className="mt-3 ">
        <h5>
          <span>Street : </span> Kulas Light
        </h5>

        <h5>
          <span>Suit : </span>
          Apt. 556
        </h5>

        <h5>
          <span>City : </span>
          Newyork
        </h5>

        <h5>
          <span>Zipcode : </span>
          92998-3874
        </h5>
      </div>
    </Col>
  );
};

export default Profile;
