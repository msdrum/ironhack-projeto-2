//Aqui no StockDetail vamos receber via useParams() o stockID.

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function StockDetail() {
  const { stockID } = useParams();

  const [stock, setStock] = useState({});

  useEffect(() => {
    async function fetchStock() {
      try {
        const response = await axios.get(
          `http://ironrest.herokuapp.com/minha-carteira/${stockID}`
        );
        console.log(response.data);
        setStock(response.data);
      } catch (error) {
        console.error("STOCK DETAIL -->", error);
      }
    }
    fetchStock();
  }, []);

  return (
    <div>
      <h2>Componente que mostrará o detalhe da ação</h2>
      <h3>Provavelmente será um card renderizado na página Dash</h3>
      <p>{stock}</p>
    </div>
  );
}

export default StockDetail;
