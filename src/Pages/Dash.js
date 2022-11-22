import { useEffect, useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import axios from "axios";
import ModalNew from "../components/ModalNew";
import StockDetail from "./StockDetail";

function Dash({ newUser }) {
  const { walletID } = useParams();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    async function fetchWallet() {
      try {
        const response = await axios.get(
          "http://ironrest.herokuapp.com/minha-carteira"
        );
        // console.log(response.data);
        setPositions(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("DASH -->", error);
      }
    }
    fetchWallet();
  }, []);

  // console.log(positions);

  return (
    <div>
      <h1>DASH PAGE</h1>
      <h2>Página onde aparece a carteira selecionada</h2>

      <ModalNew newUser={newUser} />

      {positions
        .filter((pos) => pos.carteira === walletID)
        .map((i) => {
          return (
            <div key={i._id}>
              <h4>{i.ticker}</h4>
              <p>{i.pm}</p>
              <p>{i.qtd_total}</p>
            </div>
          );
        })}

      <Routes>
        <Route path="/:stockID" element={<StockDetail />} />
      </Routes>
    </div>
  );
}

export default Dash;
