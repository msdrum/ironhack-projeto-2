// Collection: http://ironrest.herokuapp.com/minha-carteira
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NewUser from "../components/NewUser";
import axios from "axios";
import market from "../assets/img_market.jpeg";

function Home({ newUser, setNewUser }) {
  const [wallets, setWallets] = useState([]);
  const [toggle, setToggle] = useState(false);

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

  const walletArr = wallets.map((pos) => pos.carteira);
  const wallets2 = new Set(walletArr);

  return (
    <div>
      <div className="homeDiv1">
        <h5>Bem vindo!</h5>
        <h1>Organize seus investimentos</h1>
      </div>
      <div
        style={{
          backgroundImage: `url(${market})`,

          minHeight: "400px",

          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{

            width: "50%",
            margin: "40px",
            padding: "30px",
            //backgroundColor: "rgb(225, 232, 230, 0.7)",
            borderRadius: "30px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div className="dropdown">
            <button className="botaoSelecioneUsuario">Selecione seu usuário</button>
            <div className="dropdown-content">
            {[...wallets2].map((wallet) => {
            return (
              <div key={wallet}>
                  <Link to={`/${wallet}`} className="usuariosCadastrados">
                    {wallet}
                  </Link>
                

              </div>
            );
          })}
            </div>
          </div>

        </div>
        <div
          style={{

            width: "50%",
            margin: "40px",
            padding: "30px",
            //backgroundColor: "rgb(225, 232, 230, 0.7)",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",

            alignItems: "center",
          }}
        >
          <button
            className="botaoNovaCarteira"
            onClick={() => {
              setToggle(toggle === true ? false : true);
            }}
          >
            Criar novo usuário
          </button>
          {toggle ? <NewUser newUser={newUser} setNewUser={setNewUser} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Home;
