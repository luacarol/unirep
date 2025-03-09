import React, { useState } from "react";
import "./BillCard.css";
import itemPicture from "../../assets/images/item_icon.svg";
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";
import Modal from "../Modal/Modal";

const BillCard = ({ }) => {
    let status = "Pago";

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="bill-card">
            <div><img src={itemPicture} alt="Item logo" /></div>

            <div className="content">
                <label className="legend">Nome da Conta</label>
                <label className="smaller-text">R$ 150,00</label>

                {status == "Pagar" && <ButtonLine text="Pagar" />}
                {status == "Pago" && <label className="legend paid">Pago</label>}
            </div>

            <div className="info-icon" onClick={handleOpenModal}>
                <i className="fa-solid fa-circle-info"></i>
            </div>

            {isModalOpen && (<Modal handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal}/>)}
        </div>
    )
}

export default BillCard;