import React, {useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function Modals(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dlete Row {props.id}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This action cannot be undone. <br />
          Do you want to continue?
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
            variant="danger"
            onClick={() => {
              props.remove(props.id);
              props.set(false);
            }}
          >
            Delete Row
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
