//Aqui no StockDetail vamos receber via useParams() o stockID.

import { useParams } from "react-router-dom";

function StockDetail() {
  return (
    <div>
      <h2>Componente que mostrará o detalhe da ação</h2>
      <h3>Provavelmente será um card renderizado na página Dash</h3>
    </div>
  );
}

export default StockDetail;
