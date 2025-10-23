import '../styles/Pages.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react'


function Contato() {

  return (
    <>
      <Header />

      <section className='contato-page'>
        <h1>Contato</h1>
        <p>Estamos sempre prontos para conversar! Seja para saber mais sobre nossos pets disponíveis para adoção, agendar uma visita, tirar dúvidas ou oferecer seu apoio, nossa equipe está à disposição para ajudar.</p>

        <div className='bg-contato-dados'>

        <div className="contato-info">
          <div className="dados-contato">
            <h3>Horário de Funcionamento para Visitas e Atendimento Presencial:</h3>
            <p>Segunda a Sexta-feira: 9h às 17h</p>
            <p>Sábados: 10h às 14h</p>
            <p>Domingos e Feriados: Fechado (exceto para eventos especiais de adoção previamente anunciados)</p>

            <h4>Endereço: </h4>
            <p>Rua dos Amores Carinhosos, 123 Bairro das patas - Cidade dos Bichos, Estado – CEP: 12345-678</p>

            <h4>Telefone: </h4>
            <p>(00) 000-0000</p>

            <h4>Email: </h4>
            <p>contato@projetocaramelo.com</p>

            <h4>Nossas redes sociais: </h4>
            <div className='icons-contact'>
              <FacebookLogoIcon size={32} className='facebook' />
              <InstagramLogoIcon size={32} className='instagram'/>
              <LinkedinLogoIcon size={32} className='linkedin'/>
              <YoutubeLogoIcon size={32} className='youtube'/>
            </div>


          </div>
          <div className="form-contato">
            <h3>Envie uma mensagem</h3>
            
            <input type="text" name="nome" id="nome" placeholder='Nome'/>
            <input type="email" name="email" id="nome" placeholder='Email' />
            <textarea name="mensagem" id="mensagem" placeholder='Mensagem'></textarea>
            <input type="button" value="Enviar" />
          </div>
        </div>

        </div>

        <div className='mapa'>
          <img src="https://ik.imagekit.io/bg063hqwd/assets/map.png" alt="" />
        </div>

      </section>
      

      
      <Footer />
    </>
  )
}

export default Contato