import axios from 'axios'

function DeletePosBtn({stockID}) {
    
    async function handleDelete(e) {
        e.preventDefault()
      
        try {
          await axios.delete(`https://ironrest.herokuapp.com/minha-carteira/${stockID}`);

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

export default DeletePosBtn