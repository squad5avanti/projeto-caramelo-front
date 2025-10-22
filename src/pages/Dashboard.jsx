import Menu from '../components/Menu.jsx';
import '../styles/Dashboard.css';

function Dashboard() {
   return (
    <>
      <Menu />
        <main >
          <section className='painel-admin'>
            <h1>Olá, usuario</h1>
            <p>Resumo das principais estatísticas</p>
            <div className='geral-admin'>
              <h2>Visão Geral</h2>
            </div>
          </section>

          <section className='painel-user'>
            <h1>Olá, usuario</h1>
            <p>Seu painel de informações</p>
            <div className='geral-user'>
              <h2>Etapas do processo</h2>
              <div className='etapas'>

              </div>
            </div>
          </section>
        </main>
      
    </>
  );
}

export default Dashboard;
