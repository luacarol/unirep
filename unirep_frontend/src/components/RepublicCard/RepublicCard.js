import React from "react";
import "./RepublicCard.css"

const RepublicCard = ({ name, rent, members }) => {
    return (
        <div className="republic-card">
            <h4 className="minor-subtitle">{name}</h4>
            <p className="smaller-text">Aluguel: R$ {rent}</p>
            <p className="smaller-text">Membros: {members}</p>
        </div>
    );
};

export default RepublicCard;
