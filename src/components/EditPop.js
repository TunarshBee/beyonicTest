import React, { useState } from "react";
import { Modal, Button, Form} from "react-bootstrap";

export default function EditPop(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit row information</Modal.Title>
        </Modal.Header>
        <Modal.Body id="inputTexts">
          <>
            <Form.Label htmlFor="inputPassword5">Value date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Value date"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Label htmlFor="inputPassword5">Movement Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Movement Type"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Label htmlFor="inputPassword5">Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Status"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.set(false);
            }}
          >
            Close
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              props.remove(props.id);
              props.set(false);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
