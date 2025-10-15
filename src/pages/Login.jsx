import '../App.css'
function Login(){
    return (
    <>
        
<body>
    <div className="main">
        <div className="div-esquerda">
            <img className="imagem" src="https://ik.imagekit.io/dvu2ekrhd/caramelo/Cat%20and%20dog.gif" alt="Ilustração de um gato e cachorro" />
        </div>
        <div className="div-direita">
            <div className="page">
                
                <form method="POST" className="formLogin">
                    <img className="logo" src="/logo.svg" alt=""/>
                    <h1>Entrar</h1>

                    <label for="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" autofocus="true" />
                    
                    <label for="password">Senha</label>
                    <div className="input-container">
                    <input type="password" id="password" placeholder="Digite sua senha" />
                    </div>
                    <a href="/">Esqueci minha senha</a>
                    <div className="success-message" id="successMessage">
                    <button type="button" className="btn" onclick="funcaoQueSeráExecutada()">Entrar</button>
                </div>
                    <p>Ainda não tem acesso? <a href="">Criar conta</a></p>
                </form>
            </div>
        </div>
        
    </div>
</body>
        </>
    )
}

export default Login