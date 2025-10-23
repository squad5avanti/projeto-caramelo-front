import Menu from '../components/Menu.jsx';
import '../styles/Components.css';
import '../App.css';
import '../styles/Perfil.css';
import { MdPersonAdd, MdChecklist, MdAssignmentInd, MdVisibility, MdFavorite } from "react-icons/md";

export default function Perfil() {
  return (
    <>
      <Menu /> 
      <div className="perfil-container">
        <section className="perfil-admin">
          <h2>Olá, usuário</h2>
          <p>Seu painel de informações.</p>

          <div className="etapas">
            <p>Etapas do processo</p>
          </div>

          <div className="botoes_perfil_usuario">
            <div className="etapa">
              <MdPersonAdd size={45} />
              <span>Cadastro e reserva de pet</span>
            </div>

            <div className="etapa">
              <MdChecklist size={45} />
              <span>Triagem</span>
            </div>

            <div className="etapa">
              <MdAssignmentInd size={45} />
              <span>Entrevista</span>
            </div>

            <div className="etapa">
              <MdVisibility size={45} />
              <span>Visita</span>
            </div>

            <div className="etapa">
              <MdFavorite size={45} />
              <span>Adoção</span>
            </div>
          </div>
        <div className="div2">
          <div className="historico">
              <p className="hist">Histórico de adoções</p>
              <p>Você não possui nenhuma adoção ativa.</p>
              <a className="verpets" href="">Ver pets disponiveis</a>
          </div>

          <div className="cadastro">
            <p className="cads">Pet Cadastrados</p>
            <p>Você ainda não cadastrou nenhum animal para adoção.</p>
            <p>Deseja cadastrar um pet para adoção?</p>
          </div>

          <div className="favorito">
            <p className="fav">Favortitos</p>
            <p>Você ainda não favoritou nenhum pet.</p>
          </div>
        </div>

        </section>

        <section className="perfil-usuario">
          <h2></h2>
          <p></p>
        </section>
      </div>
    </>
  );
}
