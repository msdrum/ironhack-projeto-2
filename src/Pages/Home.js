// Collection: http://ironrest.herokuapp.com/minha-carteira
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "http://ironrest.herokuapp.com/minha-carteira"
        );
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("HOME -->", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <Container>
        <h1>HOME (hello world)</h1>

        {users.map((user) => {
          return (
            <div key={user._id}>
              <Link to={`/carteira/${user._id}`}>
                Carteira: {user.carteira}
              </Link>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Home;
