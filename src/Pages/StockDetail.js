//Aqui no StockDetail vamos receber via useParams() o stockID.

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DeletePosBtn from "../components/DeletePosBtn";
import ModalOp from "../components/ModalOp";

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
    <></>

  );
}

export default StockDetail;
