// === IMPORTAÇÕES ===
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import PetCardDisponiveis from '../components/pets/PetCardDisponiveis.jsx';

import '../styles/CardsDosPets.css'

// === COMPONENTE PRINCIPAL ===
function CardsDosPets() {

  return (
    <>
      <Header />

      <section className="pets-section">
        <h1 className="conheca_pets">Conheça nossos pets</h1>
        <p className="temos_pets">
          Temos vários pets esperando uma nova casa — e pode ser a sua.
          Veja os pets disponíveis para adoção:
        </p>
      </section>
      <PetCardDisponiveis />
      <Footer />
    </>
  );
}

export default CardsDosPets;