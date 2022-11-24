import axios from "axios";
import { Button } from "react-bootstrap";

function DeletePosBtn({ stockID }) {
  async function handleDelete(e) {
    e.preventDefault();

    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/minha-carteira/${stockID}`
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button onClick={handleDelete} className="delete-button">
        Delete
      </Button>
    </>
  );
}

export default DeletePosBtn;
