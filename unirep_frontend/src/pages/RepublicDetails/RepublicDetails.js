import MemberCard from "../../components/MemberCard/MemberCard";
import Bills from "./Bills/Bills";
import "./RepublicDetails.css";
import RepublicInfo from "./RepublicInfo/RepublicInfo";

const RepublicDetails = () => {
    return (
        <div className="republic-details">
            <h2 className="bigger-subtitle">🏠 Detalhes da Moradia!</h2>

            <RepublicInfo/>

            <Bills/>

            <section className="section members-section">
                <h3 className="bigger-subtitle">Membros</h3>

                <div className="members-grid">
                    <MemberCard/>
                    <MemberCard/>
                    <MemberCard/>
                    <MemberCard/>
                </div>
            </section>
        </div>
    )
}

export default RepublicDetails;