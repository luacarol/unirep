import { useState } from "react";
import "./EditProfileCard.css";
import userImage from "../../assets/images/user.svg";
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";
import { Link } from "react-router-dom";

const EditProfileCard = () => {
    const [user, setUser] = useState({
        name: "Isabele Oliveira",
        age: 24,
        phone: "(31) 98765-4321",
        hobby: "Gosta de tocar violão",
        dislikes: "Não gosta de bagunça"
    });

    return (
        <div className="edit-profile-card">
            <div className="profile-image"><img src={userImage} alt="User profile"/></div>
            
            <div className="basic-infos">
                <label className="minor-subtitle">{user.name}</label>

                <label className="text-commom">{user.age} anos</label>

                <label className="text-commom">{user.phone}</label>
            </div>

            <div className="description-button">
                <div className="description-info">
                    <label className="smaller-text">Sou {user.name} tenho {user.age} anos e {user.hobby} e {user.dislikes}</label>
                </div>

                <Link className="link" to="/edit-profile"><ButtonLine text="Editar meu perfil" /></Link>
            </div>
        </div>
    )
}

export default EditProfileCard;