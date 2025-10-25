import '../styles/Components.css';
import '../App.css';
import Menu from '../components/Menu';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PencilIcon, TrashIcon } from '@phosphor-icons/react';

function Adotantes() {
  const [adotantes, setAdotantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  

  // Função para buscar usuários da API
  const fetchAdotantes = async () => {
  try {
    const token = localStorage.getItem("token"); // pega o token do login
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/adotantes`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setAdotantes(response.data);
  } catch (err) {
    console.error('Erro ao buscar adotantes:', err);
    setError('Não foi possível carregar os adotantes.');
  } finally {
    setLoading(false);
  }
};


  // Busca os usuários assim que o componente é montado
  useEffect(() => {
    fetchAdotantes();
  }, []);

  return (
    <>
    <Menu />
    <section className="container-admin">
    <div className="header-adotantes">
        <h2>Usuários Cadastrados</h2>
        <p>Listagem de todos os clientes que possuem uma adoção do sistema</p>
    </div>
    {loading ? (
          <p>Carregando Adotantes...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : adotantes.length === 0 ? (
          <p>Nenhum adotante encontrado.</p>
        ) : (
          <div className="adotantes-lista">
            {adotantes.filter(adotante => adotante.adocoes && adotante.adocoes.length > 0)
            .map((adotante) => (
              <div className="card-admin" key={adotante.id}>
                <img
                  src={
                    adotante.foto ||
                    "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  }
                  alt={adotante.nome}
                />
                <div>
                  <h3>{adotante.nome}</h3>
                  <p>E-mail: {adotante.email}</p>
                  <p>Telefone: {adotante.telefone}</p>

                  <div className="icones">
                    <Link to={`/editarperfil/${adotante.id}`}>
                      <PencilIcon size={24} />
                    </Link>
                    <TrashIcon size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Adotantes;