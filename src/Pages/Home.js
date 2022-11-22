// Collection: http://ironrest.herokuapp.com/minha-carteira
import { Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NewUser from "../components/NewUser";
import axios from "axios";

function Home({newUser, setNewUser}) {
  const [wallets, setWallets] = useState([]);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchWallets() {
      try {
        const response = await axios.get(
          "http://ironrest.herokuapp.com/minha-carteira"
        );
        setWallets(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("HOME -->", error);
      }
    }
    fetchWallets();
  }, []);

  const walletArr= wallets.map(pos => pos.carteira)
  const wallets2 = new Set(walletArr)

  function handleChange(e) {
    setNewUser(e.target.value)
  }

  function handleClick() {
    navigate(`/${newUser}`)
  }



  return (
    <div>
      <Container>
        <div><h2>Bem vindo!</h2>
        <h1>Organize seus investimentos</h1>
        </div>
        {[...wallets2].map(wallet => {
          return (
            <Link to={`/${wallet}`} key={wallet}>{wallet}</Link>
          )
        })}

        <button onClick={() => {
          setToggle(toggle === true ? false : true)
        }}>I'm a new user!</button>

        {toggle ? (<NewUser newUser={newUser} setNewUser={setNewUser}/>) : ('')}

      </Container>

    </div>
  );
}

export default Home;
