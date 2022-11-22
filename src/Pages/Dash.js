import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ModalNew from "../components/ModalNew";

function Dash() {
  const { walletID } = useParams();
  const [positions, setPositions] = useState([]);
  const selectedWallet = positions.filter((pos) => pos.carteira === walletID)

  useEffect(() => {
    async function fetchPositions() {
      try {
        const response = await axios.get('http://ironrest.herokuapp.com/minha-carteira');
        console.log(response.data);
        setPositions(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("DASH -->", error);
      }
    }
    fetchPositions();

  }, []);

  console.log(positions);

  return (
    <div>
      <h1>DASH PAGE</h1>
      <h2>Página onde aparece a carteira selecionada</h2>

      <ModalNew walletID={walletID}/>

      {selectedWallet.map(i => {
          return (
            <div key={i._id}>
              <h4>{i.ticker}</h4>
              <p>{i.pm}</p>
              <p>{i.qtd_total}</p>
            </div>
          )
        })}
    </div>
  );
}

export default Dash;
