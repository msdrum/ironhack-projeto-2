// Collection: http://ironrest.herokuapp.com/minha-carteira
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [carteiras, setCarteiras] = useState([]);

  useEffect(() => {
    async function fetchCarteiras() {
      try {
        const response = await axios.get(
          "http://ironrest.herokuapp.com/minha-carteira"
        );
        setCarteiras(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("HOME -->", error);
      }
    }
    fetchCarteiras();
  }, []);

  return (
    <div>
      <Container>
        <h1>HOME (hello world teste 2)</h1>

        {carteiras.map((carteira) => {
          return (
            <div key={carteira._id}>
              <Link to={`/carteira/${carteira._id}`}>
                Carteira: {carteira.carteira}
              </Link>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Home;
