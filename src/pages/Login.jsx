const Login = () => {
    return(
        <form id="forms">
            <h1> Login </h1>
                <div className="input-box">
                    <input placeholder="Usuário" type="text" id="user" autoComplete="off"/>
                    <i className="bx bxs-user"></i>
                </div>

                <div className="input-box">
                    <input placeholder="Senha" type="password" id="senha" autoComplete="off" required/>
                    <i id="icon" className="bx bxs-lock-alt"></i>
                </div>

                <div className="remember-forgot">
                    <label>
                    <input type="checkbox"/>
                        Lembrar senha
                    </label>

                    <a href="#"> Esqueci a senha </a>
                </div>

                <button className="login" type="submit"> Login </button>
                {/* <!-- dentro de um forms o type submit submete o formulário, sendo esse um de seus usos --> */}
        </form>
    );
}

export default Login;