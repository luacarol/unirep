import React, { useState } from "react";
import "./Register.css";
import ButtonIcon from "../../components/Buttons/ButtonIcon/ButtonIcon";
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando dados:", formData);
        // Aqui você pode chamar a API para cadastrar o usuário
    };

    return (
        <div className="register">
            <h2 className="title">🚀 Cadastro</h2>
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="label-input">
                        <label htmlFor="full_name" className="minor-subtitle">Nome completo</label>
                        <input
                            id="full_name"
                            type="text"
                            name="full_name"
                            placeholder="Luana Caroliny Pedroso dos Anjos"
                            value={formData.full_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="label-input">
                        <label htmlFor="email" className="minor-subtitle">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="luanacaroliny07@gmail.com"
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
                            placeholder="*************"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="label-input">
                        <Link className="link" to="/login"><label className="link">Já tenho um login</label></Link>
                    </div>

                    <ButtonIcon text="Cadastrar" iconClass="fa-solid fa-right-to-bracket" />
                </form>
            </div>
        </div>
    );
};

export default Register;
