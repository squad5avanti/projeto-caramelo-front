import Menu from '../components/Menu.jsx';
import '../styles/Dashboard.css';

import {
  HouseLineIcon,
  PawPrintIcon,
  ChatCircleDotsIcon,
  CheckCircleIcon,
  UserPlusIcon,
} from "@phosphor-icons/react";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const isAdmin = user?.usuarioadmin === true;

  return (
    <>
      <Menu />
      <main className='dashboard-main'>
        {isAdmin ? (
          <section className="painel-admin">
            <h1>Olá, {user.nome}</h1>
            <p>Resumo das principais estatísticas.</p>

            <div className="visao-geral">
              <h2>Visão geral</h2>
              <div className="cards-geral">
                <div className="card-dashboard">
                  <strong>12</strong>
                  <p>Adotados este mês</p>
                </div>
                <div className="card-dashboard">
                  <strong>32</strong>
                  <p>Adoções pendentes</p>
                </div>
                <div className="card-dashboard">
                  <strong>08</strong>
                  <p>Vacinados</p>
                </div>
                <div className="card-dashboard">
                  <strong>02</strong>
                  <p>Cadastros pendentes</p>
                </div>
              </div>
            </div>

            <div className="grid-admin">
              <div className="ultimos-pets">
                <h2>Últimos pets cadastrados</h2>
                <ul>
                  <li>
                    <span>Lola</span>
                    <span>4 anos</span>
                    <span>Adotante</span>
                  </li>
                  <li>
                    <span>Lola</span>
                    <span>4 anos</span>
                    <span>Adotante</span>
                  </li>
                  <li>
                    <span>Lola</span>
                    <span>4 anos</span>
                    <span>Adotante</span>
                  </li>
                </ul>
              </div>

              <div className="pets-adotados">
                <h2>Últimos pets adotados</h2>
                <ul>
                  <li>
                    <span>Lola</span>
                    <span>Adotante</span>
                  </li>
                </ul>
              </div>

              <div className="arrecadacoes">
                <h2>Arrecadações</h2>
                <div className="progress-circle">
                  <span>86%</span>
                </div>
              </div>
            </div>
          </section>

        ) : (
          // Painel Usuário
          <section className="painel-user">
            <h1>Olá, {user.nome}</h1>
            <p>Seu painel de informações</p>

            <div className="etapas-processo">
              <h2>Etapas do processo</h2>
              <div className="etapas">
                <div className="etapa roxo">
                  <div className="icon-circle">
                    <UserPlusIcon size={26} color="#fff" weight="fill" />
                  </div>
                  <span>Cadastro</span>
                </div>

                <div className="etapa verde">
                  <div className="icon-circle">
                    <CheckCircleIcon size={26} color="#fff" weight="fill" />
                  </div>
                  <span>Triagem</span>
                </div>

                <div className="etapa amarelo">
                  <div className="icon-circle">
                    <ChatCircleDotsIcon size={26} color="#fff" weight="fill" />
                  </div>
                  <span>Entrevista</span>
                </div>

                <div className="etapa cinza">
                  <div className="icon-circle">
                    <HouseLineIcon size={26} color="#fff" weight="fill" />
                  </div>
                  <span>Visita</span>
                </div>

                <div className="etapa cinza">
                  <div className="icon-circle">
                    <PawPrintIcon size={26} color="#fff" weight="fill" />
                  </div>
                  <span>Adoção</span>
                </div>
              </div>
            </div>

            <div className="info-cards">
              <div className="card-info">
                <h3>Histórico de adoções</h3>
                <p>Você não possui nenhuma adoção em seu perfil.</p>
              </div>
              <div className="card-info">
                <h3>Pets cadastrados</h3>
                <p>Cadastre o seu pet para adoção clicando aqui.</p>
              </div>
              <div className="card-info">
                <h3>Favoritos</h3>
                <p>Clique no coração ao lado do pet para marcar como favorito.</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default Dashboard;
