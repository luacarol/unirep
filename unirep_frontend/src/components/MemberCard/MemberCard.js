import "./MemberCard.css";
import userProfile from "../../assets/images/user.svg"
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";

const MemberCard = () => {
    return (
        <div className="member-card">
            <img className="member-profile-img" src={userProfile} alt="User Profile"/>

            <div className="infos">
                <label className="legend">Luana dos Anjos</label>

                <label className="smaller-text course">Cursando Análise e Desenvolvimento de Sistemas</label>
        
                <ButtonLine className="imgs-videos-button" text="Detalhes"/>
            </div>
        </div>
    )
}

export default MemberCard;