import react from "react";
import { Col } from "react-bootstrap";

const Navigation = () => {
  return (
    <Col md={{ span: 2 }} className="ml-5 navbar">
      <div className="d-flex flex-column  mx-auto bd-highlight">
        <p>Profile</p>
        <hr />
        <p>Post</p>
        <hr />
        <p>Gallery</p>
        <hr />
        <p>ToDo</p>
      </div>
    </Col>
  );
};

export default Navigation;
