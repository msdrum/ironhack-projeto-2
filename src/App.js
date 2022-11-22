// Collection: http://ironrest.herokuapp.com/minha-carteira
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Dash from "./Pages/Dash";

function App() {
  const [newUser, setNewUser] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home newUser={newUser} setNewUser={setNewUser} />}
        />
        {/* rota para a carteira: */}
        <Route path="/:walletID/*" element={<Dash newUser={newUser} />} />
      </Routes>
    </div>
  );
}

export default App;
