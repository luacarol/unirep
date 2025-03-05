import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importando os estilos

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="title">UniRep</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Cadastrar-se</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
