import { PlusCircleIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import PetCardBusca from "../components/pets/PetCardBusca.jsx";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Pets() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/pets`)
    setPets(response.data)
  }

   const filteredPets = pets.filter((pet) => 
        [pet.nome].some((field) => 
            field.toLowerCase().includes(search.toLowerCase())
        )
    )

   const filteredPetsEstado = pets.filter((pet) => 
        [pet.estado].some((field) => 
            field.toLowerCase().includes(search.toLowerCase())
        )
    )

  useEffect(() => { 
  fetchPets()}, [])

  const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

  const user = getUser();
  const isAdmin = user?.usuarioadmin === true;

  return (
    <>
      <Menu />
      <div className="pets-dashboard">
        <div className="pets-header">
          <div>
            <h1>Olá, {user?.nome}</h1>
            <p>Listagem dos pets cadastrados no nosso sistema.</p>
          </div>

          {/* ✅ Botão de adicionar pet (aparece só pra admin) 
          {isAdmin && (*/}
            <button
              className="btn-add-pet"
              onClick={() => navigate("/pets/novo")}
            >
              <PlusCircleIcon size={22} weight="fill" />
              Adicionar Pet
            </button>
            <div className="pets-search-container" style={{ margin: '20px 0' }}>
          <input
            type="text"
            className="pets-search-input"
            placeholder="Buscar pet pelo nome..."
            value={search} // O valor é controlado pelo estado
            onChange={e => setSearch(e.target.value)} // Atualiza o estado em tempo real
            style={{ width: '100%', padding: '15px', fontSize: '1rem', boxSizing: 'border-box' }}
          />
            </div>

        </div>
      </div>

      <PetCardBusca pets2={filteredPets} />
    </>
  );
}

export default Pets;
