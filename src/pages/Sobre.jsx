import '../styles/Pages.css'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'


function Sobre() {

  return (
    <>
      <Header />

        <section className='sobre-page'>
          <div className='sobre-txt'>
            <h1>Sobre nós</h1>
            <h3>Nossa História e Inovação</h3>
            <p>Conheça o nosso Projeto Caramelo e saiba porque estamos fazendo história e inovando o mercado de adoção de pets.

            </p>
            <p>O Projeto Caramelo nasceu de uma paixão inegável: 
              transformar vidas. Não apenas a vida dos pets que chegam até nós, muitas vezes em situação de vulnerabilidade, mas também a vida das famílias que se abrem para o amor incondicional.
              Enquanto a maioria das instituições foca apenas no resgate, nós vamos além. Criamos um modelo de agência de adoção com infraestrutura completa e foco em reabilitação e bem-estar, garantindo que cada animal esteja física e emocionalmente pronto para um novo começo.
            </p>
            <p>
              Aqui, a inovação está em cada detalhe:
              <ul>
                <li><span>Reabilitação de Ponta:</span> Nossa clínica veterinária interna e o centro de reabilitação garantem que todos os pets recebam o tratamento e a nutrição de que precisam, eliminando barreiras de saúde para a adoção.</li>
                <li><span>Treinamento e Socialização:</span> Com espaços dedicados e amplas áreas de recreação (para cães e gatos!), preparamos nossos hóspedes para o convívio familiar, facilitando a transição para o novo lar.</li>
                <li><span>Adoção Consciente: </span> Nosso processo de atendimento não é apenas um preenchimento de ficha. É um match perfeito! Dedicamos tempo para entender a rotina e o perfil do adotante, garantindo que o pet escolhido tenha tudo para prosperar</li>
              </ul>
            </p>
          </div>

          <div className="cards-sobre">
            <div className="missao">
              <h2>Missão</h2>
              <p>Nossa missão é simples e poderosa: Ser a ponte mais segura, transparente e amorosa entre animais que precisam de um lar e famílias que procuram um amigo. Queremos elevar o padrão de cuidado em abrigos, mostrando que resgate e bem-estar podem andar lado a lado.</p>
            </div>
            <div className="visao">
              <h2>Valores</h2>
              <p><span>Transparência: </span>Você pode ver de perto o cuidado que dedicamos a cada animal.</p>
              <p><span>Bem-Estar Integral: </span>Priorizamos a saúde física e mental de todos os pets.</p>
              <p><span>Respeito e Dignidade: </span>Cada animal, independentemente da raça ou história, merece uma vida de amor.</p>
              <p><span>Comunidade: </span>Acreditamos que a adoção é um ato coletivo que transforma a sociedade.</p>
            </div>
          </div>
          <section className="divisor"></section>

          <div className="location-sobre">
          <h2>Nossas Instalações</h2>
          <p>Venha nos visitar! Convidamos você a conhecer o Projeto Caramelo de perto. Caminhe pelas nossas áreas de recreação, veja a dedicação em todas as áreas e sinta a energia do amor que nos move.</p>
          <div className="galery-sobre">
            <div className="img-sobre-1">
              <img src="https://ik.imagekit.io/dvu2ekrhd/caramelo/img-1.png" alt="recepão agencia projeto caramelo -gerada por ia" />
            </div>
            <div className="img-sobre-2">
              <img src="https://ik.imagekit.io/dvu2ekrhd/caramelo/img-2.png" alt="área de descanso agencia projeto caramelo -gerada por ia" />
            </div>
            <div className="img-sobre-3">
              <img src="https://ik.imagekit.io/dvu2ekrhd/caramelo/img-3.png" alt="cuidadores agencia projeto caramelo -gerada por ia" />
            </div>
            <div className="img-sobre-4">
              <img src="https://ik.imagekit.io/dvu2ekrhd/caramelo/img-4.png" alt="fachada agencia projeto caramelo -gerada por ia" />
            </div>
            <div className="img-sobre-5">
              <img src="https://ik.imagekit.io/dvu2ekrhd/caramelo/img-5.png" alt="área de recreação agencia projeto caramelo -gerada por ia" />
            </div>
            <div className="img-sobre-6">
              <img src="https://ik.imagekit.io/dvu2ekrhd/caramelo/img-6.png" alt="área de reabilitação agencia projeto caramelo -gerada por ia" />
            </div>

            <div className="img-sobre-7">
              <img src="https://ik.imagekit.io/dvu2ekrhd/caramelo/img-8.png" alt="área de grooming agencia projeto caramelo -gerada por ia" />
            </div>
          </div>
          </div>

        </section>
              
      <Footer />
    </>
  )
}

export default Sobre