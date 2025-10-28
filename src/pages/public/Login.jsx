import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de autenticação
    if (user === 'admin' && senha === 'admin123') {
      login('admin');
      navigate('/dashboard');
    } else if (user === 'vendedor' && senha === 'vendedor123') {
      login('vendedor');
      navigate('/cadastro');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <form id="forms" onSubmit={handleSubmit}>
      <h1>Login</h1>

      <div className="input-box">
        <input
          placeholder="Usuário"
          type="text"
          id="user"
          autoComplete="off"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <i className="bx bxs-user"></i>
      </div>

      <div className="input-box">
        <input
          placeholder="Senha"
          type="password"
          id="senha"
          autoComplete="off"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <i id="icon" className="bx bxs-lock-alt"></i>
      </div>

      <div className="remember-forgot">
        <label>
          <input type="checkbox" />
          Lembrar senha
        </label>
        <a href="#">Esqueci a senha</a>
      </div>

      <button className="login" type="submit">Login</button>
    </form>
  );
};

export default Login;