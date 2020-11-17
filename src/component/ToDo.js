import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";

const ToDo = () => {
  const { username } = useParams();
  const { state, dispatch } = useContext(UserContext);

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

  return (
    <Container className="mt-5" fluid>
      <Row>
        {console.log(state)}
        <Navigation userId={state && state.username} />
        <Col md={9}>
          <div className="d-flex flex-row justify-content-between">
            <h5 className="font-roboto">ToDo</h5>

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
            <Col md={12}>
              <div className="comming">
                <h1 className="text-center mx-auto">Comming Soon</h1>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ToDo;
