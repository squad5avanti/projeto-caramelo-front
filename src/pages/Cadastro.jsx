import '../App.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { saveUser } from '../services/ApiServices.jsx';
import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react';

function Cadastro() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userData = {
        nome: form.nome,
        telefone: form.telefone,
        email: form.email,
        senha: form.senha,
        usuarioadmin: false
};


      console.log('Enviando cadastro:', userData);
      await saveUser(userData);

      alert('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setError('Erro ao cadastrar. Verifique os campos e tente novamente.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="main layout-invertido">
      <div className="div-esquerda">
        <img
          src="https://ik.imagekit.io/dvu2ekrhd/caramelo/adote-um-pet.gif?updatedAt=1760543407564"
          alt="Ilustração de um gato e sua dona"
          className="imagem"
        />
      </div>

      <div className="div-direita">
        <div className="page">
          <form className="formLogin" onSubmit={handleSubmit}>
            <Link to="/">
              <img
                className="logo"
                src="https://ik.imagekit.io/dvu2ekrhd/caramelo/logo-claro.svg?updatedAt=1760542860782"
                alt="logo"
              />
            </Link>

            <h1>Criar conta</h1>

            <label htmlFor="nome">Nome completo</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              required
            />

            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="Digite seu telefone"
              required
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              required
            />

            <label htmlFor="senha">Senha</label>
            <div className="input-container">
            <input
                type={showPassword ? "text" : "password"}
                name="senha"
                value={form.senha}
                onChange={handleChange}
                placeholder="Digite sua senha"
                minLength="8"
                maxLength="12"
                required
            />
            <button
                type="button"
                className="togglePassword"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
                {showPassword ? <EyeSlashIcon size={22} /> : <EyeIcon size={22} />}
            </button>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>

            <div className="footer-info">
              <input type="checkbox" required />
              <div>
                <p>Ao criar uma conta, você concorda com os nossos</p>
                <p>
                  <a href="#">Termos de Serviço</a> e nossa{' '}
                  <a href="#">Política de Privacidade.</a>
                </p>
              </div>
            </div>

            <p className="access">
              Já tem acesso? <Link to="/login">Entre aqui</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
