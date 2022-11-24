// Collection: https://ironrest.herokuapp.com/minha-carteira
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Dash from "./Pages/Dash";

function App() {
  const [newUser, setNewUser] = useState("");

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home newUser={newUser} setNewUser={setNewUser} />}
        />
        {/* rota para a carteira: */}
        <Route path="/:walletID/*" element={<Dash newUser={newUser} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
