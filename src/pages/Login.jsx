import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth';
import '../App.css';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const navigate = useNavigate(); // ← Hook do React Router

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await authService.login(email, password);
            console.log('Login bem-sucedido:', response);
            navigate('/');
            
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
                            
                            <label htmlFor="password">Senha</label>
                            <div className="input-container">
                                <input 
                                    type="password" 
                                    id="password" 
                                    placeholder="Digite sua senha" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={loading}
                                />
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
                            
                            <p>Ainda não tem acesso? <a href="">Criar conta</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;