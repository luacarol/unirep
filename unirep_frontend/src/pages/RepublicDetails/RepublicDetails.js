import "./RepublicDetails.css";
import republicImage from "../../assets/images/undraw_small_town_re_7mcn 1.svg";

const RepublicDetails = () => {
    return (
        <div className="republic-details">
            <h2 className="title">✨ Detalhes da sua Moradia</h2>

            <section className="section">
                <h3 className="bigger-subtitle">🏠 Informações da Moradia</h3>
            </section>

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