import "./MemberCard.css";
import userProfile from "../../assets/images/user.svg"
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";

const MemberCard = () => {
    return (
        <div className="member-card">
            <img className="member-profile-img" src={userProfile} alt="User Profile"/>

            <div className="infos">
                <label className="legend">Nome do Membro</label>

                <label className="smaller-text">Cursando...</label>

                <label className="smaller-text">(12) 982173929</label>

                <ButtonLine text="Ver detalhes"/>
            </div>
        </div>
    )
}

export default MemberCard;