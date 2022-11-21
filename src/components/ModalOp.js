import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import NewOp from './NewOp';

function ModalOp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new position
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nova compra/venda de --- Inserir ticker da ação</Modal.Title>
        </Modal.Header>
        <Modal.Body><NewOp /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOp