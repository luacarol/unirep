import "./EditProfileCard.css";
import userImage from "../../assets/images/user.svg";
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";

const EditProfileCard = () => {
    return (
        <div className="edit-profile-card">
            <div className="profile-image"><img src={userImage}/></div>
            
            <div className="basic-infos">
                <label className="minor-subtitle">Nome do Usuário</label>

                <label className="text-commom">24 anos</label>

                <label className="text-commom">(12) 982173929</label>
            </div>

            <div className="description-button">
                <div className="description-info">
                    <label className="text-commom">Descrição</label>
                    <label className="smaller-text">Descrição curta do perfil do usuário falando da sua personalidade.</label>
                </div>

                <ButtonLine text="Editar meu perfil" />
            </div>
        </div>
    )
}

export default EditProfileCard;