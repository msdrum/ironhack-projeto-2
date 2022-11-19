// Collection: http://ironrest.herokuapp.com/minha-carteira
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Detail from "./Pages/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userID" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
