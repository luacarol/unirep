import React from "react";
import "./RepublicCard.css"

const RepublicCard = ({ name, rent, members }) => {
    return (
        <div className="republic-card">
            <div className="republic-image"></div>

            <div className="republic-card-infos">
                <label className="text-commom">{name}</label>

                <div className="icon-label">
                    <i className="fa fa-users"></i>
                    <label className="smaller-text">{members} membros</label>
                </div>

                <div className="icon-label">
                    <i className="fas fa-newspaper"></i>
                    <label className="smaller-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                </div>
            
                <label className="legend rent">R$ {rent}</label>
            </div>
        </div>
    );
};

export default RepublicCard;
