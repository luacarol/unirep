import React from "react";
import "./UserRepublic.css";
import republicImage from "../../assets/images/undraw_small_town_re_7mcn 1.svg"
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";
import { Link } from "react-router-dom";

const UserRepublic = ({ republic }) => {
    return (
        <div className="user-republic-card">
            <div className="republic-image"><img src={republicImage} alt="Republic logo" /></div>

            <div className="basic-infos">

                <label className="minor-subtitle">Nome da República</label>

                <label className="text-commom">Endereço, Bairro.<br/>CEP, Cidade, Estado</label>

                <label className="text-commom">(00) 00000-00</label>

            </div>

            <div className="description-button">
                <div className="description-info">
                    <label className="text-commom">Descrição</label>
                    <label className="smaller-text">Curta descrição da cultura e da vibe dentro da república, falando de suas características físicas e peculiares.</label>
                </div>

                <Link className="link" to="/bills"><ButtonLine text="Ver itens à pagar"/></Link>
            </div>
        </div>
    );
};

export default UserRepublic;
