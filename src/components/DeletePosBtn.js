import axios from 'axios'

function DeletePosBtn({stockID}) {
    
    async function handleDelete(e) {
        try {
          await axios.delete(`https://ironrest.herokuapp.com/minha-carteira/${stockID}`);

        } catch (error) {
          console.log(error);
        }
      }
    
    return (
        <>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default DeletePosBtn