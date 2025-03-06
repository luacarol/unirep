import "./RepublicDetails.css";
import RepublicInfo from "./RepublicInfo/RepublicInfo";

const RepublicDetails = () => {
    return (
        <div className="republic-details">
            <h2 className="title">✨ Detalhes da sua Moradia</h2>

            <RepublicInfo/>

            <section className="section">
                <h3 className="bigger-subtitle">💵 Itens à Pagar</h3>
            </section>

            <section className="section">
                <h3 className="bigger-subtitle">👥 Membros</h3>
            </section>
        </div>
    )
}

export default RepublicDetails;