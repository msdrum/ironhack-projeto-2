// Collection: http://ironrest.herokuapp.com/minha-carteira
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Dash from "./Pages/Dash";
import StockDetail from "./components/StockDetail";

function App() {
  const [newUser, setNewUser] = useState('');
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home newUser={newUser} setNewUser={setNewUser}/>} />
        {/* rota para a carteira: */}
        <Route path="/:walletID" element={<Dash newUser={newUser}/>} />
        {/* rota para as informações da ação da carteira (compra e venda) */}
        <Route path="/:walletID/:stockID" element={<StockDetail />} />
      </Routes>
    </div>
  );
}

export default App;
