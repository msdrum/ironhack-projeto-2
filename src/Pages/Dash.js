import { useEffect, useState } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import ModalNew from "../components/ModalNew";
import StockDetail from "./StockDetail";

function Dash() {
  const { walletID } = useParams();
  const [positions, setPositions] = useState([]);
  const selectedWallet = positions.filter((pos) => pos.carteira === walletID);

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
    <div className="dash-container">
      <div className="olaFulano">
        <h5>Olá {walletID}!</h5>
        <p>Seu patrimônio total investido é de <span><b>R$ 1.000.000,00</b></span></p>
        <p>Editar carteira</p>
        <p>Excluir carteira</p>
      </div>
      <ModalNew walletID={walletID} />

      {selectedWallet.map((i) => {
        const quantidadeTotal =
          i.op
            .filter((op) => op.tipo === "Compra")
            .map((op) => +op.qtd)
            .reduce((a, b) => a + +b, 0) -
          i.op
            .filter((op) => op.tipo === "Venda")
            .map((op) => +op.qtd)
            .reduce((a, b) => a + +b, 0);
        const precoMedio =
          i.op
            .filter((op) => op.tipo === "Compra")
            .map((op) => +op.preco * +op.qtd)
            .reduce((a, b) => a + +b, 0) /
          i.op
            .filter((op) => op.tipo === "Compra")
            .map((op) => +op.qtd)
            .reduce((a, b) => a + +b, 0);

        async function calcData() {
          await axios.put(
            `https://ironrest.herokuapp.com/minha-carteira/${i._id}`,
            { pm: precoMedio }
          );

          await axios.put(
            `https://ironrest.herokuapp.com/minha-carteira/${i._id}`,
            { qtd_total: quantidadeTotal }
          );
        }

        calcData();

        return (
          <div key={i._id}>
            <Link to={`/${i.carteira}/${i._id}`}>
              <h4>{i.ticker}</h4>
            </Link>
            <p>
              PM:{" "}
              {i.pm.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p>QTD TOTAL: {i.qtd_total}</p>
            <p>
              VALOR TOTAL:{" "}
              {(i.qtd_total * i.pm).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        );
      })}

      <Routes>
        <Route
          path=":stockID"
          element={<StockDetail selectedWallet={selectedWallet} />}
        />
      </Routes>
    </div>
  );
}

export default Dash;
