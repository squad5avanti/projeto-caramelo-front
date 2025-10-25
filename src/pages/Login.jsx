import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate(); // ← Hook do React Router


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await authService.login(email, password);
            localStorage.setItem("token", response.token);
            console.log('Login bem-sucedido:', response);
            navigate('/dashboard');
            
        } catch (error) {
            setError(error.message || 'Erro ao fazer login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="main">
                <div className="div-esquerda">
                    <img 
                        className="imagem" 
                        src="https://ik.imagekit.io/dvu2ekrhd/caramelo/cat-dog.gif?updatedAt=1760546832364" 
                        alt="Ilustração de um gato e cachorro" 
                    />
                </div>
                <div className="div-direita">
                    <div className="page">
                        <form onSubmit={handleSubmit} className="formLogin">
                            <Link to="/">
                                <img 
                                    className="logo" 
                                    src="https://ik.imagekit.io/dvu2ekrhd/caramelo/logo-escuro.svg?updatedAt=1760542894596" 
                                    alt="Logo Caramelo"
                                    
                                />
                            </Link>
                            <h1>Entrar</h1>

                            {error && (
                                <div className="error-message">
                                    {error}
                                </div>
                            )}

                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Digite seu e-mail" 
                                autoFocus={true}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={loading}
                            />
                            
                            <label htmlFor="senha">Senha</label>
                            <div className="input-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                            
                            <a href="/">Esqueci minha senha</a>
                            
                            <div className="success-message">
                                <button 
                                    type="submit" 
                                    className="btn" 
                                    disabled={loading}
                                >
                                    {loading ? 'Entrando...' : 'Entrar'}
                                </button>
                            </div>
                            
                            <p className='acesso-login'>Ainda não tem acesso? <Link to="/cadastro">Criar conta</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;