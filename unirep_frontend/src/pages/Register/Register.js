import React, { useState } from "react";

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
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="full_name"
                    placeholder="Nome Completo"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Register;
