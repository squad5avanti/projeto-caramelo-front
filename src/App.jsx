import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importar páginas
import Home from "./pages/Home.jsx";
import CardsDosPets from "./pages/CardsDosPets.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Sobre from "./pages/Sobre.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<CardsDosPets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}
