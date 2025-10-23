import { useState } from "react";
import Menu from "../components/Menu.jsx";
import "../styles/Components.css";
import "../App.css";
import "../styles/EditarPerfil.css";

export default function EditarPerfil() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    sexo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validar = () => {
    const newErrors = {};
    if (!form.nome.trim()) newErrors.nome = "O nome é obrigatório.";
    if (!form.telefone.trim()) newErrors.telefone = "O telefone é obrigatório.";
    if (!form.email.trim()) newErrors.email = "O email é obrigatório.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email inválido.";
    if (!form.senha.trim()) newErrors.senha = "A senha é obrigatória.";
    if (!form.sexo) newErrors.sexo = "Selecione o sexo.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validar();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Perfil atualizado com sucesso!");
    }
  };

  const handleCancel = () => {
    if (confirm("Deseja realmente cancelar as alterações?")) {
      setForm({
        nome: "",
        telefone: "",
        email: "",
        senha: "",
        sexo: "",
      });
      setErrors({});
    }
  };
 
  
  return (
    <>
      <Menu />

      <section className="perfil">
        <div className="editar-descricao">
          <img
            src="https://i.ibb.co/4nxcGh4j/adventure-time-pictures-x4vl1efzqfne2p8u-fotor-20251017152312.png"
            alt="Foto do usuário"
          />
          <p className = "nome-usuario">Jake</p>
          <div className = "edit-descricao">
            <p className = "parag-descricao">Olá!
              Eu sou o Jake, 
              um cachorro mágico que
               pode esticar e 
              moldar meu corpo do jeito
               que quiser. Adoro acompanhar
                meu melhor amigo Finn 
              em aventuras pelo Reino de Ooo 
              e sempre levo coragem, humor 
              e criatividade para cada missão.</p>
          </div>
          
        </div>

        <div className="editar-perfil">
          <p className = "perfil-editar">Editar Perfil</p>

          <form className="form-editar-perfil" onSubmit={handleSubmit}>
            <label>Nome completo:</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
            placeholder="Digite seu nome completo"/>
            {errors.nome && <p className="erro">{errors.nome}</p>}

            <label>Telefone:</label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
            placeholder="Digite seu telefone"/>
            {errors.telefone && <p className="erro">{errors.telefone}</p>}

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            placeholder="Digite seu email"/>
            {errors.email && <p className="erro">{errors.email}</p>}

            <label>Senha:</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
            placeholder="*************"/>
            {errors.senha && <p className="erro">{errors.senha}</p>}

            <div className="sexo-container">
              <p>Sexo:</p>

              <label className="radio-label">
                <input
                  type="radio"
                  name="sexo"
                  value="Masculino"
                  checked={form.sexo === "Masculino"}
                  onChange={handleChange}
                />
                <span className="custom-radio"></span>
                Masculino
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  name="sexo"
                  value="Feminino"
                  checked={form.sexo === "Feminino"}
                  onChange={handleChange}
                />
                <span className="custom-radio"></span>
                Feminino
              </label>

              {errors.sexo && <p className="erro">{errors.sexo}</p>}
            </div>

            <div className="botoes-editar">
              <button type="submit" className="btn-salvar">
                Salvar
              </button>
              <button
                type="button"
                className="btn-cancelar"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
