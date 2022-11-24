import axios from "axios";
import { Button } from "react-bootstrap";

function DeletePosBtn({ stockID }) {
  async function handleDelete(e) {
    e.preventDefault();


        } catch (error) {
          console.log(error);
        }
      }
    
    return (
        <>
            <button onClick={() => {              
              handleDelete()
              window.location.reload()}}>Delete</button>
        </>
    )

}

export default DeletePosBtn;
