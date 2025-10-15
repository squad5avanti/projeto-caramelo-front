import '../App.css'
function Cadastro(){
    return (
    <>
        
<body>
    <div className="main layout-invertido">
        
        <div className="div-esquerda">
            <img className="imagem" src="/Adopt a pet.gif" alt="Ilustração de um gato e sua dona" />
        </div>
        
        
        <div className="div-direita">
            <div className="page">
        
                <form method="POST" className="formLogin">
                    <img className="logo" src="/logo.svg" alt=""/>

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
                    <button type="button" className="btn" onclick="funcaoQueSeráExecutada()">Entrar</button>
                
                </div>
                <div>
                <p><input type="checkbox"/>Ao criar uma conta, você concorda com os nossos 
                <a href="">Termos de Serviço</a> e nossa <a href="">Política de Privacidade.</a></p>
                 </div>
                    <p>Já tem acesso? <a href="">Entre aqui</a></p>
                </form>

            </div>
        </div>
        
    </div>
</body>

      </>
    )
}
export default Cadastro