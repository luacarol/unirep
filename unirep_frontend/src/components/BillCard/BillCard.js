import React, { useState } from "react";
import "./BillCard.css";
import itemPicture from "../../assets/images/item_icon.svg";
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";
import Modal from "../Modal/Modal";

const BillCard = ({ }) => {
    let status = "Pago";
    let notMember = true;  // Alterei o valor para false, de acordo com seu exemplo

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="bill-card">
            <div><img src={itemPicture} alt="Item logo" /></div>

            <div className="content">
                <label className="legend">Nome da Conta</label>
                <label className="smaller-text">R$ 150,00</label>

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
                    handleOpenModal={handleOpenModal}
                    handleCloseModal={handleCloseModal}
                    infos={
                        <div className="label-value">
                            <label className="legend">Explicação da conta:</label>
                            <label className="smaller-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </label>
                        </div>
                    }
                />
            )}
        </div>
    );
};

export default BillCard;
