import '../styles/Components.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { UserCircleIcon, MagnifyingGlassIcon, DoorOpenIcon } from '@phosphor-icons/react';


function Menu() {

  return (
    <>
      <div className='menu-sistema'>
        <img src="https://ik.imagekit.io/dvu2ekrhd/caramelo/logo-claro.svg?updatedAt=1760542860782" alt="" width={150}/>

        <nav>
            <Link to="/menu">Menu</Link>
            <Link to="/adotantes">Adotantes</Link>
            <Link to="/adotados">Adotados</Link>
            <Link to="/pets">Pets</Link>
        </nav>

        <div className="busca">
            <p>Buscar...</p>
            <MagnifyingGlassIcon size={21} />
        </div>

        <div className="perfil-menu">
            <UserCircleIcon size={21} />
            <p>Perfil</p>
        </div>
        <div className='sair-menu'>
            <p>Sair</p>
            <DoorOpenIcon size={21}/>
        </div>
      </div>
    </>
  )
}

export default Menu