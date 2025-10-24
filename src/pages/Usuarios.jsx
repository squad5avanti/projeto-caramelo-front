import { MdEditNote } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

import Menu from "../components/Menu.jsx";
import "../styles/Components.css";
import "../App.css";
import "../styles/Usuarios.css";

export default function Usuarios() {


    const usuarios = [
  { id: 1, nome: "Jake", funcao: "Administrador", foto: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png" },
  { id: 2, nome: "Lana Del Rey", funcao: "Usuário", foto: "https://i.ibb.co/rfTj5FdM/imagem-cortada-circular-2.png" },
  { id: 3, nome: "Bender", funcao: "Usuário", foto: "https://i.ibb.co/QFfVLz5m/MV5-BMTQ3-NDM3-NDg3-NV5-BMl5-Ban-Bn-Xk-Ft-ZTgw-MTIx-ODc5-Mj-E-V1-FMjpg-UX1000.jpg" },
  { id: 4, nome: "Flins", funcao: "Usuário", foto: "https://i.ibb.co/whgw69tk/imagem-cortada-circular-4.png" },
  { id: 5, nome: "Gengar", funcao: "Usuário", foto: "https://i.ibb.co/LzRLtpb0/imagem-cortada-circular-5.png" },
    ];

  return (
    <>
      <Menu />
     <section className="container-admin">
    <div className="header-usuarios">
        <h2>Usuários Cadastrados</h2>
        <p>Listagem de todos os usuários do sistema</p>
    </div>

    
<div className="usuarios-lista">
  {usuarios.map(usuarios => (
    <div className="card-admin" key={usuarios.id}>
        <img src={usuarios.foto} alt={usuarios.nome} />
      <div>
        <h3>{usuarios.nome}</h3>
        <p>Função: {usuarios.funcao}</p>

        <div className="icones" >
          <Link to="/editarperfil">
            <MdEditNote  size={24}/> 
          </Link>
            
            <IoTrashOutline size={24}/>
        </div>
      </div>
    </div>
  ))}
</div>
</section>

    </>
  );
}
