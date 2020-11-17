import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";
import ModalView from "./ModalView";

const Profile = () => {
  const { username } = useParams();
  const { state, dispatch } = useContext(UserContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios({
      url: "https://panorbit.in/api/users.json",
      method: "get",
    })
      .then((value) => {
        console.log(value.data.users);
        const filterArray = value.data.users.filter((item) => {
          return item.username === username;
        });

        localStorage.setItem("user", JSON.stringify(filterArray[0]));
        dispatch({ type: "USER", payload: filterArray[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <Container className="mt-5" fluid>
      <Row>
        {console.log(state)}
        <Navigation userId={state && state.username} />
        <Col md={9}>
          <div
            className="d-flex flex-row justify-content-between modal-click"
            onClick={handleShow}
          >
            <h5 className="font-roboto">Profile</h5>

            <div className="d-flex flex-row justify-content-between">
              <img
                src={state && state.profilepicture}
                style={{ height: 30, width: 30 }}
                className="img-fluid rounded-pill"
              />
              <h5 className="ml-3 font-roboto">{state && state.name}</h5>
            </div>
          </div>
          <hr />
          <Row className="profile font-roboto">
            <Personal userData={state && state} />
            <Address userData={state && state} />
          </Row>
          <ModalView show={show} setShow={setShow} />
        </Col>
      </Row>
    </Container>
  );
};

const Personal = ({ userData }) => {
  return (
    <Col md={{ span: 4, offset: 1 }}>
      <div className="text-center">
        <img
          src={userData && userData.profilepicture}
          style={{ height: 200, width: 200 }}
          className="img-fluid rounded-pill"
        />
      </div>

      <h5 className="text-center mt-3">{userData && userData.name}</h5>

      <div className="mt-3">
        <h5>
          <span>Username : </span>
          {userData && userData.username}
        </h5>
        <h5>
          <span>Email : </span> {userData && userData.email}
        </h5>
        <h5>
          <span>Phone : </span> {userData && userData.phone}
        </h5>
        <h5>
          <span>Website : </span>
          {userData && userData.website}
        </h5>

        <hr />

        <div className="mt-3 ">
          <h5 className="text-center">
            <span>Company</span>
          </h5>

          <h5>
            <span>Name : </span> {userData && userData.company.name}
          </h5>

          <h5>
            <span>CatchPhrase : </span>
            {userData && userData.company.catchPhrase}
          </h5>

          <h5>
            <span>bs : </span>
            {userData && userData.company.bs}
          </h5>
        </div>
      </div>
    </Col>
  );
};

const Address = ({ userData }) => {
  return (
    <Col md={{ span: 6, offset: 1 }}>
      <h5>
        <span>Address:</span>
      </h5>

      <div className="mt-3 ">
        <h5>
          <span>Street : </span> {userData && userData.address.street}
        </h5>

        <h5>
          <span>Suit : </span>
          {userData && userData.address.suite}
        </h5>

        <h5>
          <span>City : </span>
          {userData && userData.address.city}
        </h5>

        <h5>
          <span>Zipcode : </span>
          {userData && userData.address.zipcode}
        </h5>
      </div>

      <div className="mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1605604093999!5m2!1sen!2sin"
          style={{ width: 500, height: 400, border: 0 }}
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <p>
          Lat: {userData && userData.address.geo.lat}, Long:{" "}
          {userData && userData.address.geo.lng}
        </p>
      </div>
    </Col>
  );
};

export default Profile;
