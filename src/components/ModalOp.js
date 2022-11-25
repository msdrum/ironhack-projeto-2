import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import NewOp from './NewOp';

function ModalOp({ ticker, stockID }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="button-new-op" variant="primary" onClick={handleShow}>
        Incluir nova operação
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nova compra/venda de {ticker}</Modal.Title>
        </Modal.Header>
        <Modal.Body><NewOp stockID={stockID}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
                                                      handleClose()
                                                      window.location.reload()}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOp