import React from "react";
import "./RepublicCard.css"
import republicImage from "../../assets/images/undraw_small_town_re_7mcn 1.svg"

const RepublicCard = ({ name, rent, members, description, onClick }) => {
    return (
        <div className="republic-card" onClick={onClick}>
            <div className="republic-image"><img src={republicImage} alt="Republic logo" /></div>

            <div className="republic-card-infos">
                <label className="text-commom republic-name">{name}</label>

                <div className="icon-label">
                    <i className="fa fa-users"></i>
                    <label className="smaller-text">{members} membros</label>
                </div>

                <div className="icon-label">
                    <i className="fas fa-newspaper"></i>
                    <label className="smaller-text description">{description}</label>
                </div>

                <div className="icon-label">
                    <i class="fa-solid fa-location-dot"></i>
                    <label className="smaller-text">São José dos Campos</label>
                </div>
            
                <label className="legend rent">R$ {rent}</label>
            </div>
        </div>
    );
};

export default RepublicCard;
