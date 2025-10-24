import '../styles/Components.css';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircleIcon, MagnifyingGlassIcon, DoorOpenIcon } from '@phosphor-icons/react';

function Menu() {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  const isAdmin = user?.usuarioadmin === true;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className='menu-sistema'>
      <Link to="/">
        <img src="https://ik.imagekit.io/dvu2ekrhd/caramelo/logo-claro.svg?updatedAt=1760542860782" alt="Logo Projeto Caramelo" width={150}/>
      </Link>

      <nav>
        <Link to="/dashboard">Menu</Link>
        {isAdmin && (
          <>
            <Link to="/adotantes">Adotantes</Link>
            <Link to="/adotados">Adotados</Link>
          </>
        )}
        <Link to="/listapets">Pets</Link>
      </nav>

      <div className="busca">
        <p>Buscar...</p>
        <MagnifyingGlassIcon size={21} />
      </div>

      {isAuthenticated() ? (
        <>
          <div className="perfil-menu">
            <UserCircleIcon size={21} />
            <p>Olá, {user?.nome}</p>
          </div>
          <div className='sair-menu' onClick={handleLogout}>
            <p>Sair</p>
            <DoorOpenIcon size={21}/>
          </div>
        </>
      ) : (
        <div className='sair-menu'>
          <Link to="/login">
            <p>Fazer Login</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
