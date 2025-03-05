import React from "react";
import "./RepublicCard.css"; // Estilos do card

const RepublicCard = ({ name, rent, members }) => {
    return (
        <div className="republic-card">
            <h3>{name}</h3>
            <p>💰 Aluguel: R$ {rent}</p>
            <p>👥 Membros: {members}</p>
        </div>
    );
};

export default RepublicCard;
