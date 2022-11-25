import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import UpdateOp from './UpdateOp';

function UpdateOpModal({ stockID, op, operations }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="button-detail-ed" variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar operação</Modal.Title>
        </Modal.Header>
        <Modal.Body><UpdateOp stockID={stockID} op={op} operations={operations}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
                                                      window.location.reload()
                                                      handleClose()}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateOpModal