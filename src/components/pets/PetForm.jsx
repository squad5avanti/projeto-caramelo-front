import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Menu from "../Menu.jsx";
import { savePet } from "../../services/ApiServices.jsx";



export default function PetForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    especie: "",
    nascimento: "",
    descricao: "",
    estado: "",
    situacao: "",
    vacinado: "",
    peso: "",
    sexo: "",
    tamanho: "",
    personalidade: "",
    avatar: "",
    fotos: ""
  });

  // Atualiza os valores do form
  const handleChange = (e) => {
    const { name, value } = e.target;

    let parsedValue = value;

    // Converte vacinado para boolean
    if (name === "vacinado") parsedValue = value === "true";

    // Mantém peso como string para compatibilidade com backend
    if (name === "peso") parsedValue = value;

    setForm({ ...form, [name]: parsedValue });
  };

  // Submete o form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples: todos os campos obrigatórios
    if (!form.nome || !form.especie || !form.nascimento || !form.estado || !form.sexo || !form.tamanho) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    try {
      // Sanitiza os dados para envio
      const petData = {
        ...form,
        nascimento: new Date(form.nascimento),
        vacinado: form.vacinado === true || form.vacinado === "true",
        peso: form.peso ? parseFloat(form.peso) : 0,
        situacao: "pendente"
      };

      console.log("petData enviado:", petData);
      await savePet(petData);

      alert("Pet cadastrado com sucesso!");
      navigate("/listapets");
    } catch (error) {
      console.error("Erro ao salvar pet:", error);
      alert("Erro ao salvar pet. Verifique os campos e o login.");
    }
  };
  localStorage.getItem("token")


  return (
    <>
      <Menu />
      <div className="form-container-pets">
        <h2>Cadastrar Novo Pet</h2>

        <form onSubmit={handleSubmit} className="form-new-pet">
          <label>Nome</label>
          <input type="text" name="nome" value={form.nome} onChange={handleChange} required />

          <label>Espécie</label>
          <input type="text" name="especie" value={form.especie} onChange={handleChange} required />

          <label>Data de Nascimento</label>
          <input type="date" name="nascimento" value={form.nascimento} onChange={handleChange} required />

          <label>Descrição</label>
          <textarea name="descricao" value={form.descricao} onChange={handleChange}></textarea>

          <label>Status</label>
          <select name="estado" value={form.estado} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="disponivel">Disponível</option>
            <option value="reservado">Reservado</option>
            <option value="adotado">Adotado</option>
          </select>

          <label>Vacinado</label>
          <select name="vacinado" value={form.vacinado} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>

          <label>Peso (kg)</label>
          <input type="number" step="0.1" name="peso" value={form.peso} onChange={handleChange} required />

          <label>Sexo</label>
          <select name="sexo" value={form.sexo} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>

          <label>Tamanho</label>
          <select name="tamanho" value={form.tamanho} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>

          <label>Personalidade</label>
          <input type="text" name="personalidade" value={form.personalidade} onChange={handleChange} required />

          <label>Avatar (URL)</label>
          <input type="url" name="avatar" value={form.avatar} onChange={handleChange} required />

          <label>Fotos (URL)</label>
          <input type="url" name="fotos" value={form.fotos} onChange={handleChange} />

          <div className="cadastrar-pets-btn">
            <button type="submit" className="save">Salvar</button>
            <Link to="/listapets">
              <button type="button" className="cancelar">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
