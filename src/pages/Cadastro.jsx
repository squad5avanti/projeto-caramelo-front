import '../App.css'
import { Link } from "react-router-dom";

function Cadastro(){
    return (
    <>
        <div className="main layout-invertido">
            
            <div className="div-esquerda">
                <img src="https://ik.imagekit.io/dvu2ekrhd/caramelo/adote-um-pet.gif?updatedAt=1760543407564" alt="Ilustração de um gato e sua dona" className="imagem" />
            </div>
            
            
            <div className="div-direita">
                <div className="page">
            
                    <form method="POST" className="formLogin">
                        <Link to="/">
                        <img className="logo" src="https://ik.imagekit.io/dvu2ekrhd/caramelo/logo-claro.svg?updatedAt=1760542860782" alt="logo"/>
                        </Link>
                        

                        <h1>Criar conta</h1>

                        <label for="nome">Nome completo</label>
                        <input type="text" placeholder="Digite seu nome completo"/>

                        <label for="data de nascimento">Data de nascimento</label>
                        <input type="date" placeholder="Digite sua data de nascimento"/>

                        <label for="email">E-mail</label>
                        <input type="email" id="email" placeholder="Digite seu e-mail" autofocus="true" />
                        
                        <label for="password">Senha</label>
                        <div className="input-container">
                        <input type="password" id="password" placeholder="Digite sua senha" minlength="8" maxlength="12" required/>
                        </div>
                        <div className="success-message" id="successMessage">
                        <button type="button" className="btn" onclick="funcaoQueSeráExecutada()">Cadastrar</button>
                    
                    </div>
                        <div className='footer-info'>
                                <input type="checkbox"/>
                                <div>
                                    <p>Ao criar uma conta, você concorda com os nossos </p>
                                    <p><a href="">Termos de Serviço</a> 
                                     e nossa <a href="">Política de Privacidade.</a></p>
                                </div>
                                
                            
                        </div>
                            <p className='access'>Já tem acesso? <Link to="/login">Entre aqui</Link> </p>
                    </form>

                </div>
            </div>
            
        </div>
      </>
    )
}
export default Cadastro