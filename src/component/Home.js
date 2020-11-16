import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = ({ state }) => {
  return (
    <Container>
      <Row>
        <Col className="mt-5" md={{ span: 6, offset: 3 }}>
          <Card className="rounded-lg">
            <Card.Header className="py-4">
              <h4>Select an Account</h4>
            </Card.Header>
            <Card.Body>
              {state &&
                state.map((item) => {
                  return (
                    <>
                      <div class="d-flex flex-row mb-3">
                        <img
                          src={item.profilepicture}
                          style={{ height: 30, width: 30 }}
                          className="img-fluid rounded-pill mr-3"
                        />
                        <p>{item.name}</p>
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
