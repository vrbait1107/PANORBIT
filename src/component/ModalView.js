import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";

const ModalView = ({ show, setShow }) => {
  const history = useHistory();
  const handleClose = () => setShow(false);
  const { state, dispatch } = useContext(UserContext);
  const handleSignOut = () => {
    history.push("/");
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className="text-center">
        <img
          src={state && state.profilepicture}
          className="img-fluid rounded-pill mt-3"
          style={{ maxHeight: 200, width: 200 }}
        />
        <div className="info font-robota mt-3">
          <h5>{state && state.name}</h5>
          <h5>{state && state.email}</h5>
          <Button
            variant="danger"
            className="px-4 rounded-pill my-3"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalView;
