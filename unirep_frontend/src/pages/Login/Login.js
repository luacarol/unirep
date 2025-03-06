import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ButtonIcon from "../../components/Buttons/ButtonIcon/ButtonIcon"
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth(); // Pegando o login do contexto
  const navigate = useNavigate(); // Para redirecionar

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password); // Chama a função de login
    navigate("/"); // Redireciona para Home
  };

  return (
    <div className="login">
      <h2 className="title">👤 Login</h2>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="label-input">
            <label htmlFor="email" className="minor-subtitle">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="label-input">
            <label htmlFor="password" className="minor-subtitle">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <ButtonIcon text="Entrar" iconClass="fa-solid fa-right-to-bracket" />
        </form>
      </div>
    </div>
  );
};

export default Login;
