import React, { useState } from "react";
import "./BillCard.css";
import itemPicture from "../../assets/images/item_icon.svg";
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";
import Modal from "../Modal/Modal";

const BillCard = ({ bill }) => {
    const { name, amount, description } = bill;
    let status = "Pago";
    let notMember = true;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="bill-card">
            <div className="div"><img src={itemPicture} alt="Item logo" /></div>

            <div className="content div">
                <label className="legend">{name}</label>
                <label className="smaller-text">R$ {amount.toFixed(2)}</label>

                {notMember === false && (
                    <>
                        {status === "Pagar" && <ButtonLine text="Pagar" />}
                        {status === "Pago" && <label className="legend paid">Pago</label>}
                    </>
                )}
            </div>

            <div className="info-icon" onClick={handleOpenModal}>
                <i className="fa-solid fa-circle-info"></i>
            </div>

            {isModalOpen && (
                <Modal
                    title="Detalhes da Conta"
                    handleOpenModal={handleOpenModal}
                    handleCloseModal={handleCloseModal}
                    infos={
                        <div className="label-value">
                            <label className="legend">{name}</label>
                            <label className="smaller-text">{description}</label>
                        </div>
                    }
                />
            )}
        </div>
    );
};

export default BillCard;
