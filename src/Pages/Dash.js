// Aqui no Dash vamos receber via useParams() a walletID

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Dash() {
  const { walletID } = useParams();
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    async function fetchWallet() {
      try {
        const response = await axios.get(
          ` http://ironrest.herokuapp.com/minha-carteira/${walletID}`
        );
        console.log(response.data);
        setWallet(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("DASH -->", error);
      }
    }
    fetchWallet();
  }, [walletID]);

  return (
    <div>
      <h1>DASH PAGE</h1>
      <h2>Página onde aparece a carteira selecionada</h2>

      {/* renderizar as informações do nome da carteira (carteira), ticker, quantidade de ações, preço médio. */}
    </div>
  );
}

export default Dash;
