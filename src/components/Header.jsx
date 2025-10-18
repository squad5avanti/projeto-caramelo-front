import '../styles/Components.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="info-header">
          <div className='logo-header'></div>
          <div className="menu">
            <a href="#" onClick={() => navigate('/')}>Inicio</a>
            <a href="#" onClick={() => navigate('/pets')}>Conhecer Pets</a>
            <a href="#" onClick={() => navigate('/sobre')}>Sobre</a>
            <a href="#" onClick={() => navigate('/contato')}>Contato</a>
          </div>
          <div className='btn-header'>
            <button onClick={() => navigate('/login')}>Fazer Login</button>
          </div>

        </div>
      </div>
    </>
  )
}
