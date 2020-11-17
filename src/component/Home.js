import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios({
      url: "https://panorbit.in/api/users.json",
      method: "get",
    })
      .then((value) => {
        console.log(value.data.users);
        setState(value.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="account-container">
      <Row>
        <Col className="mt-5" md={{ span: 6, offset: 3 }}>
          <Card className="rounded-lg">
            <Card.Header className="py-4">
              <h4 className="font-roboto">Select an Account</h4>
            </Card.Header>
            <Card.Body className="account-card">
              {state &&
                state.map((item) => {
                  return (
                    <>
                      <div key={item.id} class="d-flex flex-row mb-3">
                        <img
                          src={item.profilepicture}
                          style={{ height: 30, width: 30 }}
                          className="img-fluid rounded-pill mr-3"
                        />
                        <Link
                          className="text-dark"
                          to={`Profile/${item.username}`}
                        >
                          {item.name}
                        </Link>
                      </div>
                      <hr />
                    </>
                  );
                })}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
