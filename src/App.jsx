import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importar páginas
import Home from "./pages/Home.jsx";
import CardsDosPets from "./pages/CardsDosPets.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Pets from "./pages/Pets.jsx";
import PetForm from "./components/pets/PetForm.jsx";
import Adotantes from "./pages/Adotantes.jsx";
import Adocoes from "./pages/Adocoes.jsx";
import Perfil from "./pages/Perfil.jsx";
import EditarPerfil from "./pages/EditarPerfil.jsx";
import Usuarios from "./pages/Usuarios.jsx";
import Page404 from "./pages/Page404.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<CardsDosPets />} />
        <Route path="/listapets" element={<Pets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pets/novo" element={<PetForm />} />
        <Route path="/adotantes" element={<Adotantes />} />
        <Route path="/adotados" element={<Adocoes />} />

        <Route path="/perfil" element={<Perfil />} />
        <Route path="/editarperfil" element={<EditarPerfil />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
