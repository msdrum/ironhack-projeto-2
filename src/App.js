// Collection: http://ironrest.herokuapp.com/minha-carteira
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Dash from "./Pages/Dash";
import StockDetail from "./components/StockDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* rota para a carteira: */}
        <Route path="/carteira/:carteiraID" element={<Dash />} />
      </Routes>
    </div>
  );
}

export default App;
