import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="title">UniRep</h2>
            <ul>
                <li>
                    <Link className="minor-subtitle" to="/">Home</Link>
                </li>
                <li>
                    <Link className="minor-subtitle" to="/register">Cadastrar-se</Link>
                </li>
                <li>
                    <Link className="minor-subtitle" to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
