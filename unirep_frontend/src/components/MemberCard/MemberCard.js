import React, { useState } from "react";
import "./MemberCard.css";
import userProfile from "../../assets/images/user.svg"
import ButtonLine from "../Buttons/ButtonLine/ButtonLine";
import Modal from "../Modal/Modal";

const MemberCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="member-card">
            <img className="member-profile-img" src={userProfile} alt="User Profile" />

            <div className="infos">
                <label className="legend">Luana dos Anjos</label>

                <label className="smaller-text course">Cursando Análise e Desenvolvimento de Sistemas</label>

                <ButtonLine className="imgs-videos-button" text="Detalhes" onClick={handleOpenModal} />
            </div>

            {isModalOpen && (
                <Modal
                    title="Detalhes de Informações do Membro"
                    handleOpenModal={handleOpenModal}
                    handleCloseModal={handleCloseModal}
                    infos={
                        <>
                            <div className="label-value">
                                <label className="legend">Nome: </label>
                                <label className="smaller-text">Luana dos Anjos</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Idade: </label>
                                <label className="smaller-text">24 anos</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Cursando: </label>
                                <label className="smaller-text">Análise e Desenvolvimento de Sistemas</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Hobbie Preferido: </label>
                                <label className="smaller-text">Jogar futebol</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Eu Não Gosto de... </label>
                                <label className="smaller-text">Cozinhar</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Socialização: </label>
                                <label className="smaller-text">Introvertido</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Possui Habilidades Domésticas: </label>
                                <label className="smaller-text">Sim</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Modos de Contribuições: </label>
                                <ul>
                                    <li className="smaller-text">Limpar banheiro</li>
                                    <li className="smaller-text">Tirar pó de armários</li>
                                </ul>
                            </div>
                        </>
                    }
                />
            )}
        </div>
    )
}

export default MemberCard;