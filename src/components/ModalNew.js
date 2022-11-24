import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import NewStock from "./NewStock";

function ModalNew({ walletID, reload, setReload }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adicione uma nova posição
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar nova posição</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewStock
            walletID={walletID}
            reload={reload}
            setReload={setReload}
            handleClose={handleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNew;
