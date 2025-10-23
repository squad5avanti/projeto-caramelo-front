import '../styles/Pages.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'


function Contato() {

  return (
    <>
      <Header />

      <section className='contato-page'>
        <h1>Contato</h1>
        <p>Estamos sempre prontos para conversar! Seja para saber mais sobre nossos pets disponíveis para adoção, agendar uma visita, tirar dúvidas ou oferecer seu apoio, nossa equipe está à disposição para ajudar.</p>

        <div className="contato-info">
          <div className="dados-contato"></div>
          <div className="form-contato">
            <h3>Envie uma mensagem</h3>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" />
          </div>
        </div>

      </section>
      

      
      <Footer />
    </>
  )
}

export default Contato