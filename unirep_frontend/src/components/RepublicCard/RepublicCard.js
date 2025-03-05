import React from "react";
import "./RepublicCard.css"

const RepublicCard = ({ name, rent, members }) => {
    return (
        <div className="republic-card">
            <h4>{name}</h4>
            <p>Aluguel: R$ {rent}</p>
            <p>Membros: {members}</p>
        </div>
    );
};

export default RepublicCard;
