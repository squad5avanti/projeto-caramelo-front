import Menu from '../components/Menu.jsx';
import '../styles/Components.css';
import '../App.css';
import '../styles/EditarPerfil.css';

export default function EditarPerfil() {
  return (
    <>
      <Menu /> 
    
        <section className="perfil">
          <div className="editar-descrição">
            <img src="https://i.ibb.co/4nxcGh4j/adventure-time-pictures-x4vl1efzqfne2p8u-fotor-20251017152312.png" alt="" />
            <p>Nome do usuario</p>
            <p>Descrição</p>
          </div>

          <div className="editar-perfil">
            <p>Editar Perfil</p>
            <form>
                <input type="checkbox" name="Masculino" id="" />
                <input type="checkbox" name="Masculino" id="" />
            </form>
          </div>
        </section>
    
    </>
  );
}
