import { useEffect, useState } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import ModalNew from "../components/ModalNew";
import StockDetail from "./StockDetail";

function Dash() {
  const { walletID } = useParams();
  const [positions, setPositions] = useState([]);
  const selectedWallet = positions.filter((pos) => pos.carteira === walletID)

  useEffect(() => {
    async function fetchPositions() {
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
    fetchPositions();

    

  }, []);

  // console.log(positions);

  return (
    <div>
      <h1>DASH PAGE</h1>
      <h2>Página onde aparece a carteira selecionada</h2>

      <ModalNew walletID={walletID}/>

      {selectedWallet.map(i => {
          const quantidadeTotal = i.op.map(op => op.qtd).reduce((a,b) => a+b,0)
          const precoMedio = i.op.map(op=>op.preco).reduce((a,b) => a+b,0)/quantidadeTotal

          async function calcData() {          
            
            await axios.put(`https://ironrest.herokuapp.com/minha-carteira/${i._id}`, {"pm":precoMedio})

            await axios.put(`https://ironrest.herokuapp.com/minha-carteira/${i._id}`, {"qtd_total":quantidadeTotal})
          }

          calcData()

          return (
            <div key={i._id}>
              <Link to={`/${i.carteira}/${i._id}`}><h4>{i.ticker}</h4></Link>                           
              <p>{i.pm}</p>
              <p>{i.qtd_total}</p>
            </div>
          );
        })}

      <Routes>
        <Route path=":stockID" element={<StockDetail />} />
      </Routes>
    </div>
  );
}

export default Dash;
