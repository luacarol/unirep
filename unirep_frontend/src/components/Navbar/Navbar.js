import React from "react";
import { useNavigate } from "react-router-dom";  // Importando o useNavigate
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();  // Criando a função de navegação

    const handleTitleClick = () => {
        navigate("/");  // Navega para a home
    };

    return (
        <nav className="navbar">
            <h2 className="title" onClick={handleTitleClick}>UniRep</h2>  {/* Função de clique */}
            <ul>
                <li>
                    <a className="minor-subtitle" href="/">Home</a>
                </li>
                <li>
                    <a className="minor-subtitle" href="/register">Cadastrar-se</a>
                </li>
                <li>
                    <a className="minor-subtitle" href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
