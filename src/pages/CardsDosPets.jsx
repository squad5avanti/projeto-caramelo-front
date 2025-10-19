// === IMPORTAÇÕES ===
import '../styles/Home.css'
import '../styles/CardsDosPets.css'
import '../styles/components.css'
import '../styles/Dashboard.css'
import '../styles/Sobre.css'
import '../App.css'

import { FaSyringe } from "react-icons/fa";         
import { BsGenderMale, BsGenderFemale } from "react-icons/bs"; 
import { PiCat } from "react-icons/pi";
import { LuDog } from "react-icons/lu";

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

// === COMPONENTE PRINCIPAL ===
function CardsDosPets() {

  const pets = [
    { nome: "Jake", tipo: "Cachorro", idade: "10 anos", genero: "Macho", vacinado: true, imagem: "https://i.ibb.co/pvDJysP5/adventure-time-pictures-x4vl1efzqfne2p8u-fotor-20251017152312.png" },
    { nome: "Coragem", tipo: "Cachorro", idade: "5 ano", genero: "Fêmea", vacinado: false, imagem: "https://i.ibb.co/Vc01VQzb/imagem-cortada-circular-1.png" },
    { nome: "Salem", tipo: "Gato", idade: "100 anos", genero: "Macho", vacinado: true, imagem: "https://i.ibb.co/yByRHJBx/imagem-cortada-circular.png" },
    { nome: "Jake", tipo: "Cachorro", idade: "10 anos", genero: "Macho", vacinado: true, imagem: "https://i.ibb.co/pvDJysP5/adventure-time-pictures-x4vl1efzqfne2p8u-fotor-20251017152312.png" },
    { nome: "Coragem", tipo: "Cachorro", idade: "5 ano", genero: "Fêmea", vacinado: false, imagem: "https://i.ibb.co/Vc01VQzb/imagem-cortada-circular-1.png" },
    { nome: "Jake", tipo: "Cachorro", idade: "10 anos", genero: "Macho", vacinado: true, imagem: "https://i.ibb.co/pvDJysP5/adventure-time-pictures-x4vl1efzqfne2p8u-fotor-20251017152312.png" },
    { nome: "Coragem", tipo: "Cachorro", idade: "5 ano", genero: "Fêmea", vacinado: false, imagem: "https://i.ibb.co/Vc01VQzb/imagem-cortada-circular-1.png" },
    { nome: "Salem", tipo: "Gato", idade: "100 anos", genero: "Macho", vacinado: true, imagem: "https://i.ibb.co/yByRHJBx/imagem-cortada-circular.png" }
  ]
  

  return (
    <>
      <Header />

      <section className="pets-section">
        <h1 className="conheca_pets">Conheça nossos pets</h1>
        <p className="temos_pets">
          Temos vários pets esperando uma nova casa — e pode ser a sua.
          Veja os pets disponíveis para adoção:
        </p>

        <div className="cards">
          {pets.map((pet, index) => (
            <div className="pet-card" key={index}>
              
              <div className="imagem">
                <img className="img" src={pet.imagem} alt={pet.nome} />
              </div>

             <div className="nome_pet">
                <p className="nome_pet-nome">{pet.nome}</p>
                <p className="nome_pet-tipo">{pet.tipo}</p>
            </div>


              {/* DIV DOS ICONES CENTRALIZADOS */}
              <div className="informacoes-alinhadas">
                <div className="info-coluna">
                  <FaSyringe/>
                  <span>{pet.vacinado ? "Vacinado" : "Não vacinado"}</span>
                </div>

                <div className="info-coluna">
                  {pet.genero === "Macho" 
                    ? <BsGenderMale/> 
                    : <BsGenderFemale/>}
                  <span>{pet.genero}</span>
                </div>

                <div className="info-coluna">
                  {pet.tipo === "Gato" 
                    ? <PiCat/> 
                    : <LuDog/>}
                  <span>{pet.idade}</span>
                </div>
              </div>

              {/* DIV SEPARADA PARA PESO, PORTE E OBSERVAÇÃO */}
              <div className="info">
                <div className="info-item"><span>Peso:</span></div>
                <div className="info-item"><span>Porte:</span></div>
                <div className="info-item"><span>Observação:</span></div>
              </div>

              <button className="botao">Adotar</button>

            </div>
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}

export default CardsDosPets;
