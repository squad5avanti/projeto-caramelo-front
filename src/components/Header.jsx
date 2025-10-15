import '../App.css'

export default function Header() {
  
  return (
    <>
     <div className="header">
        <div className="header-info">
            <div className='logo'></div>
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
