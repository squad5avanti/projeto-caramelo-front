import '../styles/Components.css'
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react'

export default function Footer() {

  return (
    <>
      <div className='footer'>
        <div className='info-footer'>
          <div className='socials'>
            <h2>Projeto Caramelo</h2>
            <p>Adotar é um ato de amor, dê uma <br></br> nova chance a um caramelo!</p>
            <div className='icons'>
              <FacebookLogoIcon size={32} />
              <InstagramLogoIcon size={32} />
              <LinkedinLogoIcon size={32} />
              <YoutubeLogoIcon size={32} />
            </div>
          </div>
          <div className='address'>
            <h2>Nossa Ong</h2>
            <p>Rua da Felicidade, 42 - São Oliveira/ CA 0000-000</p>
            <p>(00) 000-0000</p>
            <p>contato@projetocaramelo.com</p>
          </div>
          <div className='terms'>
            <h2>Nossos Termos</h2>
            <a href="#">Termos e Condições</a>
            <a href="#">Políticas de privacidade</a>
            <a href="#">Trabalhe Conosco</a>
          </div>
        </div>
      </div>
    </>
  )
}
