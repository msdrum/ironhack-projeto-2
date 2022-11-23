import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NewUser({ newUser, setNewUser }) {
  const navigate = useNavigate();

  function handleChange(e) {
    setNewUser(e.target.value);
  }

  function handleClick() {
    navigate(`/${newUser}`);
  }

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Nome da Carteira"
        onChange={handleChange}
      />

      <button className="botaoConfirmar" onClick={handleClick}>
        CONFIRMAR
      </button>
    </>
  );
}

export default NewUser;
