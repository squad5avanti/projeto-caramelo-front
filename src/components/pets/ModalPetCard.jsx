import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/Styles.css";
import {GenderMaleIcon,  GenderFemaleIcon,  PencilIcon,  TrashIcon,  XIcon,  PawPrintIcon,  HeartIcon,  SyringeIcon,  ShieldCheckIcon,  ShieldWarningIcon,  CheckIcon,} from "@phosphor-icons/react";
import { updatePet, deletePet } from "../../services/ApiServices";


const getGenderIcon = (sexo) => {
  if (sexo?.toLowerCase() === "femea") return <GenderFemaleIcon size={21} />;
  if (sexo?.toLowerCase() === "macho") return <GenderMaleIcon size={21} />;
};

export default function ModalPetCard({ pet, onClose, isAdmin, updatePetInState }) {

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...pet });
  const navigate = useNavigate();

  const isVacinado = pet.vacinado === true || pet.vacinado === "Vacinado";
  

  // Função para deletar pet
  const handleDelete = async () => {
    const confirmDelete = confirm(`Tem certeza que deseja deletar ${pet.nome}?`);
    if (!confirmDelete) return;

   
    try {
      await deletePet(pet.id);
      alert("Pet deletado com sucesso!");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar pet:", error);
      alert("Erro ao deletar o pet.");
    }
  };

  // Abrir formulário de edição
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Cancelar edição
  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormData({ ...pet });
  };

  // Atualizar valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  // Salvar alterações
  const handleSaveEdit = async (e) => {
  e.preventDefault();

  console.log("📦 Dados enviados para update:", pet);

  try {
        const petData = {
          ...formData,
          nascimento: new Date(formData.nascimento),
          vacinado: formData.vacinado === true || formData.vacinado === "true",
          peso: formData.peso ? parseFloat(formData.peso) : 0,
        };
  
        console.log("petData enviado:", petData);

        await updatePet(petData.id, petData);
        alert("Pet atualizado com sucesso!");
        updatePetInState(petData);
        navigate("/listapets");
        onClose();

      } catch (error) {
        console.error("Erro ao atualizar pet:", error);
        alert("Erro ao atualizar pet. Verifique os campos e o login.");
      }
};

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-pet" onClick={(e) => e.stopPropagation()}>

        {/* --- MODAL NORMAL --- */}
        {!isEditing && (
          <>
            <div className="pet-left">
              <header className="pet-card-header">
                <div className="pet-status-badge">
                  <p>
                    {pet.estado === "disponivel" ? (
                      <ShieldCheckIcon size={20} className="icon-disponivel" />
                    ) : pet.estado === "reservado" ? (
                      <ShieldWarningIcon size={20} className="icon-reservado" />
                    ) : pet.estado === "adotado" ? (
                      <span className="icon-adotado">
                        <PawPrintIcon size={20} />
                      </span>
                    ) : (
                      <span className="icon-indefinido">Status desconhecido</span>
                    )}
                  </p>
                  <p className="status-text">{pet.estado}</p>
                </div>
                <HeartIcon size={24} className="favorite-icon" />
              </header>

              <section className="dados-pets">
                <img src={pet.avatar} alt={pet.nome} className="pet-avatar" />
                <h3 className="pet-name">{pet.nome}</h3>
                <p className="pet-type">{pet.especie}</p>
              </section>

              <section className="details-pets-modal">
                <div className="info-pet-detail">
                  <SyringeIcon size={21} className="icon-info-pet" />
                  <p className="text-info-pet">{isVacinado ? "Vacinado" : "Não vacinado"}</p>
                </div>
                <div className="info-pet-detail">
                  {getGenderIcon(pet.sexo)}
                  <p className="text-info-pet">{pet.sexo}</p>
                </div>
                <div className="info-pet-detail">
                  <PawPrintIcon size={21} className="icon-info-pet" />
                  <p className="text-info-pet">
                    {new Date().getFullYear() - new Date(pet.nascimento).getFullYear()} anos
                  </p>
                </div>
              </section>

              <section className="info-pets-modal">
                <p><span className="detail-label">Peso:</span> {pet.peso}kg</p>
                <p><span className="detail-label">Porte:</span> {pet.tamanho}</p>
                <p><span className="detail-label">Personalidade:</span> {pet.personalidade}</p>
                <p><span className="detail-label">Descrição:</span> {pet.descricao}</p>
                {pet.adotante && (
                  <p><span className="detail-label">Adotante:</span> {pet.adotante}</p>
                )}
              </section>

              {isAdmin && <div className="pet-situation-footer">
                 <p className="situation-label">Situação:</p>
                <div className={`btn-status-situacao ${pet.situacao.toLowerCase()}`}>
                  {pet.situacao}
                </div>
              </div>}
            </div>

            <div className="pet-right">
              <div className="pet-admin-header">
                {isAdmin && <span className="admin-tag">Admin</span>}
                <div className="admin-actions">
                  {isAdmin && (
                    <>
                      <button className="icon-action-btn" title="Editar" onClick={handleEdit}>
                        <PencilIcon size={24} />
                      </button>
                      <button className="icon-action-btn" title="Deletar" onClick={handleDelete}>
                        <TrashIcon size={24} />
                      </button>
                    </>
                  )}
                  <button className="icon-action-btn close-btn" title="Fechar" onClick={onClose}>
                    <XIcon size={24} />
                  </button>
                </div>
              </div>
              <img src={pet.avatar} alt={pet.nome} className="pet-large" />
            </div>
          </>
        )}

        {/* --- SUBMODAL DE EDIÇÃO --- */}
        {isEditing && (
          <div className="edit-pet-form">
            <h2>Editar Pet</h2>
            <form onSubmit={handleSaveEdit}>
              <label>Nome:</label>
              <input name="nome" value={formData.nome} onChange={handleChange} required />

              <label>Espécie:</label>
              <input name="especie" value={formData.especie} onChange={handleChange} required />

              <label>Data de Nascimento:</label>
              <input type="date" name="nascimento" value={formData.nascimento?.slice(0, 10)} onChange={handleChange} required />

              <label>Status:</label>
              <select name="estado" value={formData.estado} onChange={handleChange} required>
                <option value="">Selecione</option>
                <option value="disponivel">Disponível</option>
                <option value="reservado">Reservado</option>
                <option value="adotado">Adotado</option>
              </select>

              <label>Situação:</label>
              <select name="situacao" value={formData.situacao} onChange={handleChange} required>
                <option value="">Selecione</option>
                <option value="pendente">Pendente</option>
                <option value="aceito">Aceito</option>
              </select>

              <label>Vacinado:</label>
              <select name="vacinado" value={formData.vacinado} onChange={handleChange} required>
                <option value="">Selecione</option>
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>

              <label>Peso (kg):</label>
              <input type="number" step="0.1" name="peso" value={formData.peso} onChange={handleChange} required />

              <label>Sexo:</label>
              <select name="sexo" value={formData.sexo} onChange={handleChange} required>
                <option value="">Selecione</option>
                <option value="macho">Macho</option>
                <option value="femea">Fêmea</option>
                <option value="outro">Outro</option>
              </select>

              <label>Porte:</label>
              <select name="tamanho" value={formData.tamanho} onChange={handleChange} required>
                <option value="">Selecione</option>
                <option value="pequeno">Pequeno</option>
                <option value="medio">Médio</option>
                <option value="grande">Grande</option>
              </select>

              <label>Personalidade:</label>
              <input name="personalidade" value={formData.personalidade} onChange={handleChange} />

              <label>Descrição:</label>
              <textarea name="descricao" value={formData.descricao} onChange={handleChange} />

              <label>Avatar (URL):</label>
              <input name="avatar" value={formData.avatar} onChange={handleChange} />

              <label>Fotos (URL):</label>
              <input name="fotos" value={formData.fotos} onChange={handleChange} />

              <div className="form-buttons">
                <button type="button" onClick={handleCancelEdit}>Cancelar</button>
                <button type="submit" className="save-btn">
                  <CheckIcon size={18} /> Salvar
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
