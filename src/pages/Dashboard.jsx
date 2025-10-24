import Menu from '../components/Menu.jsx';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';

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

  const [pets, setPets] = useState([]);
  const [adocoes, setAdocoes] = useState([]);
  const [adotantes, setAdotantes] = useState([]);

  const fetchPets = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/pets`)
    setPets(response.data)
  }

  useEffect(() => { 
  fetchPets()}, [])

  const fetchAdocoes = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/adocoes`)
      setAdocoes(response.data)
    }

  useEffect(() => { 
  fetchAdocoes()}, [])

  const fetchAdotantes = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/adotantes`)
      setAdotantes(response.data)
    }
    
    useEffect(() => { 
    fetchAdotantes()}, [])

  const totalAdotados = useMemo(() => {
    return pets.filter(pet => pet.estado === "adotado").length;
  }, [pets]);

  const totalVacinados = useMemo(() => {
    return pets.filter(pet => pet.vacinado === true).length;
  }, [pets]);

  const totalPendentes = useMemo(() => {
    return pets.filter(pet => pet.situacao === "pendente").length;
  }, [pets]);

  const ultimosPets = useMemo(() => {
    const petsCopia = [...pets];

    const petsOrdenados = petsCopia.sort((a, b) => b.id - a.id);

    return petsOrdenados.slice(0, 3);

  }, [pets]);

  const ultimosPetsAdotados = useMemo(() => {
    const petsCopia2  = [...pets];

    const petsCopiaAdotados = petsCopia2.filter(pet => pet.estado === 'adotado');

    const petsOrdenadosAdotados = petsCopiaAdotados.sort((a, b) => b.id - a.id);

    return petsOrdenadosAdotados.slice(0, 3);

  }, [pets]);

  const historicoAdocoes = useMemo(() => {
  const idsDeAdotantes = new Set(adotantes.map(adotante => adotante.id));
  return adocoes.filter(adocao => 
    idsDeAdotantes.has(adocao.adotantes_id)
  );
}, [adocoes, adotantes]);

  console.log(historicoAdocoes);

  const mapaDePets = useMemo(() => {
  return pets.reduce((acc, pet) => {
    acc[pet.id] = pet.nome;
    return acc;
  }, {});
}, [pets]);

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
                  <strong>{totalAdotados}</strong>
                  <p>Adotados este mês</p>
                </div>
                <div className="card-dashboard">
                  <strong>{totalVacinados}</strong>
                  <p>Vacinados</p>
                </div>
                <div className="card-dashboard">
                  <strong>{totalPendentes}</strong>
                  <p>Cadastros pendentes</p>
                </div>
              </div>
            </div>

            <div className="grid-admin">
              <div className="ultimos-pets">
                <h2>Últimos pets cadastrados</h2>
                <ul>
              {ultimosPets.length > 0 ? (
                ultimosPets.map(pet => (
                  <li key={pet.id}>
                    {pet.avatar} <strong>{pet.nome}</strong> {pet.especie}
                  </li>
                ))
              ) : (
                <p>Nenhum pet cadastrado ainda.</p>
              )}
            </ul>
              </div>

              <div className="pets-adotados">
                <h2>Últimos pets adotados</h2>
                <ul>
              {ultimosPetsAdotados.length > 0 ? (
                ultimosPetsAdotados.map(pet => (
                  <li key={pet.id}>
                    {pet.avatar} <strong>{pet.nome}</strong> {pet.especie}
                  </li>
                ))
              ) : (
                <p>Nenhum pet adotado ainda.</p>
              )}
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
                
                {historicoAdocoes.length > 0 ? (
                  <ul>
                    {historicoAdocoes.map(adocao => (
                      <li key={adocao.id}>
                      {new Date(adocao.data_adocao).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}
                      <br></br>
                      {mapaDePets[adocao.pets_id] || 'Nome não encontrado'}
                      <br></br>
                      <br></br> 
                      </li>
                    ))}
    </ul>
  ) : (
    <p>Nenhum histórico de adoção encontrado.</p>
  )}
              </div>

              <div className="card-info">
                <h3>Pets cadastrados</h3>
                <p>Cadastre o seu pet para adoção <Link to="/listapets">clicando aqui</Link>.</p>
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
