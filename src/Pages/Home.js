// Collection: http://ironrest.herokuapp.com/minha-carteira
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [wallets, setWallets] = useState([]);

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

  return (
    <div>
      <Container>
        <h1>HOME (hello world teste 2)</h1>

        {wallets.map((wallet) => {
          return (
            <div key={wallet._id}>
              <Link to={`/carteira/${wallet._id}`}>
                Carteira: {wallet.carteira}
              </Link>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Home;
