import React, { useState } from "react";
import "./UserRepublic.css";
import republicImage from "../../assets/images/undraw_small_town_re_7mcn 1.svg";
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";
import { Link } from "react-router-dom";

const UserRepublic = () => {
    const [republic, setRepublic] = useState({
        name: "República Aurora",
        address: "Rua das Palmeiras, 123, Centro",
        cityState: "Belo Horizonte, MG - 30100-000",
        description: "Uma república acolhedora com um ambiente descontraído e organizado, perfeita para quem busca tranquilidade e boas amizades."
    });

    return (
        <div className="user-republic-card">
            <div className="republic-image"><img src={republicImage} alt="Republic logo" /></div>

            <div className="basic-infos">
                <label className="minor-subtitle">{republic.name}</label>
                <label className="text-commom">{republic.address}<br/>{republic.cityState}</label>
            </div>

            <div className="description-button">
                <div className="description-info">
                    <label className="smaller-text">{republic.description}</label>
                </div>

                <Link className="link" to="/republic-details"><ButtonLine text="Ver detalhes"/></Link>
            </div>
        </div>
    );
};

export default UserRepublic;
