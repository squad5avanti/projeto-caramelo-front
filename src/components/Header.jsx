import '../styles/Components.css'

export default function Header() {

  return (
    <>
      <div className="header">
        <div className="info-header">
          <div className='logo-header'></div>
          <div className="menu">
            <a href="#">Inicio</a>
            <a href="#">Conhecer Pets</a>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
          </div>
          <div className='btn-header'>
            <button>Fazer Login</button>
          </div>

        </div>
      </div>
    </>
  )
}
