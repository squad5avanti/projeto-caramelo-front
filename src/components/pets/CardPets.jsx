import axios from 'axios';
import '../../styles/Components.css'
import { CatIcon, GenderMaleIcon, PawPrintIcon, ShieldCheckIcon, ShieldWarningIcon, SyringeIcon } from '@phosphor-icons/react'
import { useState, useEffect } from 'react';


export default function CardPets() {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/pets`)
    setPets(response.data)
  }

   useEffect(() => { 
  fetchPets()}, [])

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
              </section>
            <div className='card-pet-adotar'>
              <button>ADOTAR</button>
            </div>
            </main>
          </div>
          
        ))}
        
      </div>
      
      
    </>
  )
}
