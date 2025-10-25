import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import erro404 from '../assets/erro404.png';
import '../styles/Page404.css';

function Page404() {
  return (
    <>
      <Header />

      <main className="page404-container">
        <h2 className="titulo-erro">Oooops! Página não encontrada!</h2>
        <img src={erro404} alt="Logo página não localizada" className="imagem-erro" />
      </main>

      <Footer />
    </>
  );
}

export default Page404;
