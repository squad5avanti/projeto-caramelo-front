import axios from 'axios';
import '../../styles/Components.css'
import { CatIcon, GenderMaleIcon, PawPrintIcon, ShieldCheckIcon, ShieldWarningIcon, SyringeIcon } from '@phosphor-icons/react'
import { useState, useEffect } from 'react';
import ModalPetCard from './ModalPetCard.jsx'


export default function PetCard() {
  const [pets, setPets] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.usuarioadmin === true;

  const [selectedPet, setSelectedPet] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPet(null);
    setShowModal(false);
  };

  const updatePetInState = (updatedPet) => {
  setPets(prev =>
    prev.map(p => p.id === updatedPet.id ? updatedPet : p)
  );
};

  const fetchPets = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/pets`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  setPets(response.data);
};

  useEffect(() => { 
  fetchPets()}, []);


  console.log(pets);
  return (
    
    <>
    
      <div className='card-pets'>
        {pets.map((pet) => (
          <div className='pet-card'>
            <header className='header-card-pet'>
              <p>
                {
                  pet.estado === 'disponivel' ? (
                    <ShieldCheckIcon size={20} className='icon-disponivel' />
                  ) : pet.estado === 'reservado' ? (
                    <ShieldWarningIcon size={20} className='icon-reservado' />
                  ) : pet.estado === 'adotado' ? (
                    <span className='icon-adotado'>
                      <PawPrintIcon size={20} />
                    </span>
                  ) : (
                    <span className='icon-indefinido'>Status desconhecido</span>
                  )
                }
              </p>
              <p>{pet.estado}</p>
            </header>
            <main>
              <section className='dados-pets'>
                <img src={pet.avatar} alt="" />
                <h3>{pet.nome}</h3>
                <p>{pet.especie}</p>
              </section>
              <section className='details-pets'>
                <div className='info-1-pet'>
                  <SyringeIcon size={21} />
                  <p>{pet.vacinado ? 'Vacinado' : 'Não vacinado'}</p>
                </div>
                <div className='info-2-pet'>
                  <GenderMaleIcon size={21} />
                  <p>{pet.sexo}</p>
                </div>
                <div className='info-3-pet'>
                  <CatIcon size={21} />
                    <p>
                      {new Date().getFullYear() - new Date(pet.nascimento).getFullYear()} anos
                    </p>
                </div>
              </section>

              <section className="info-pets">
                <p><span>Peso:</span>{pet.peso}kg</p>
                <p><span>Porte:</span>{pet.tamanho}</p>
                <p><span>Descrição:</span>{pet.descricao}</p>
                {/* <p>Fotos:</p><img src={pet.fotos} alt="" width={200}/> */}
              </section>
            <div className='card-pet-adotar'>
              <button onClick={() => handleOpenModal(pet)}>Ver mais</button>
            </div>
            </main>
          </div>
          
        ))}
        
      </div>
      {showModal && selectedPet && (
          <ModalPetCard pet={selectedPet} onClose={handleCloseModal} isAdmin={isAdmin} updatePetInState={updatePetInState}  />
      )} 
      
    </>
  )
}
