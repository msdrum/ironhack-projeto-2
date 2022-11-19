// Collection: https://ironrest.herokuapp.com/stocks
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("https://ironrest.herokuapp.com/stocks");
      setUsers(response.data);
      // console.log(response.data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <center>
        <h1>HOME</h1>
      </center>
    </div>
  );
}

export default Home;
