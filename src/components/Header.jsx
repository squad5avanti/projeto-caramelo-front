import '../styles/Components.css';
import { Link } from 'react-router-dom';

export default function Header() {
  // Verifica se o usuário está logado
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const user = getUser();

  return (
    <div className="header">
      <div className="info-header">
        <div className='logo-header'></div>

        <div className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/cards">Conhecer Pets</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className='btn-header'>
          {isAuthenticated() ? (
            <div className="user-logged">
              <span className="user-name">Olá, {user?.nome}</span>
              <button onClick={handleLogout} className="logout-btn">
                Sair
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button>Fazer Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}