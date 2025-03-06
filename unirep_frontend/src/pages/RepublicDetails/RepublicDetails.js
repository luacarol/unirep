import Bills from "../Bills/Bills";
import "./RepublicDetails.css";
import RepublicInfo from "./RepublicInfo/RepublicInfo";

const RepublicDetails = () => {
    return (
        <div className="republic-details">
            <h2 className="title">✨ Detalhes da sua Moradia</h2>

            <RepublicInfo/>

            <Bills/>

            <section className="section">
                <h3 className="bigger-subtitle">👥 Membros</h3>
            </section>
        </div>
    )
}

export default RepublicDetails;