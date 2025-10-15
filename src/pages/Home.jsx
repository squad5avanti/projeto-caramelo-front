import '../App.css'
import  Footer  from '../components/Footer.jsx'
import  Header  from '../components/Header.jsx'
import Reviews from '../components/Reviews.jsx'

function Home() {
  
  return (
    <>
    <Header />
    <body>
      <main>
        <section classNameName='info-main'>
          <div classNameName='main-description'>
            <h1>Adote um <br /> caramelo</h1>
            <p>Transforme vidas com um gesto de carinho. 
            Conheça o Projeto Caramelo e encontre seu 
            novo melhor amigo.</p>
            <button>Adotar</button>
          </div>
          <div classNameName='img-main'></div>
        </section>

        <section classNameName="benefits">
          <div>
            <h2>Nossos benefícios</h2>
            <p>Por que escolher o nosso abrigo?</p>
          </div>
          <div classNameName="cards-benefits">
            <div classNameName="cb-1">
              <div classNameName="img-cb-1"></div>
              <h3>Saúde em dia</h3>
              <p>Todos os animais são vacinados, vermifugados e castrados.</p>
            </div>

            <div classNameName="cb-2">
              <div classNameName="img-cb-2"></div>
              <h3>Para você</h3>
              <p>Ajudamos você a encontraro pet ideal para seu estilo de vida.</p>
            </div>

            <div classNameName="cb-3">
              <div classNameName="img-cb-3"></div>
              <h3>Vida nova</h3>
              <p>Após a adoção, oferecemos apoio para que a adaptação seja leve e cheia de carinho.</p>
            </div>
          </div>
        </section>

        <section classNameName="adopt">
          <h2>Deseja Adotar?</h2>
          <p>É simples! Nosso sistema foi pensado para tornar o processo rápido, transparente e seguro.</p>
          <div classNameName='wave'></div>

          <div classNameName="info-adopt">
            <div classNameName="adopt-card-1">
              <p>Conheça todos os pets disponíveis para adoção.</p>
            </div>

            <div classNameName="adopt-card-2">
              <p>Preencha um cadastro e escolha dentre todas as opções de pets disponíveis.</p>
            </div>

            <div classNameName="adopt-card-3">
              <p>Reserve o animal desejado, e aguarde a apovação do formulário. Depois disso venha até a unidade conhecer o seu novo amigo!</p>
            </div>

          </div>
        </section>

        <section classNameName='divisor'>
        </section>

        <section classNameName="depoimentos">
          <div>
            <h2>Depoimentos</h2>
            <p>Conheça as experiencias de quem já adotou conosco!</p>
          </div>

          <div classNameName="card-reviews-1">
            <Reviews />
          </div>
        </section>
      </main>
      
    </body>
    <Footer />
    </>
  )
}

export default Home