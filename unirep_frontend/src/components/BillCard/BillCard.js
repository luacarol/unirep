import "./BillCard.css";
import itemPicture from "../../assets/images/item_icon.svg";

const BillCard = () => {
    return (
        <div className="bill-card">
            <div><img src={itemPicture} alt="Item logo"/></div>

            <div className="content">
                <label>Nome</label>

            </div>
        </div>
    )
}

export default BillCard;