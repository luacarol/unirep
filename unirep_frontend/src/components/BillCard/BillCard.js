import "./BillCard.css";
import itemPicture from "../../assets/images/item_icon.svg";
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";

const BillCard = ({ }) => {
    let status = "Pago"
    return (
        <div className="bill-card">
            <div><img src={itemPicture} alt="Item logo" /></div>

            <div className="content">
                <label className="legend">Nome da Conta</label>
                <label className="smaller-text">R$ 150,00</label>

                {status == "Pagar" && <ButtonLine text="Pagar" />}
                {status == "Pago" && <label className="legend paid">Pago</label>}
            </div>

            <div className="info-icon">
                <i className="fa-solid fa-circle-info"></i>
            </div>
        </div>
    )
}

export default BillCard;