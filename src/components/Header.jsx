import '../styles/Components.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="info-header">
        <div className='logo-header'></div>

        <div className="menu">
          <Link to="/">Início</Link>
          <Link to="/cards">Conhecer Pets</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className='btn-header'>
          <Link to="/login">
            <button>Fazer Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
