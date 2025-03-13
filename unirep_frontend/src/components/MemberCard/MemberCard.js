import React, { useState } from "react";
import "./MemberCard.css";
import userProfile from "../../assets/images/user.svg";
import Modal from "../Modal/Modal";

const MemberCard = ({ member }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="member-card">
            <img className="member-profile-img" src={userProfile} alt="User Profile" />

            <div className="infos">
                <label className="legend">{member.name}</label>
                <label className="smaller-text">{member.age} anos</label>
                <label className="smaller-text">Não gosto de {member.dislikes}</label>
            </div>

            <div className="info-icon" onClick={handleOpenModal}>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
                                <label className="smaller-text">{member.name}</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Idade: </label>
                                <label className="smaller-text">{member.age} anos</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Cursando: </label>
                                <label className="smaller-text">{member.course}</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Hobbie Preferido: </label>
                                <label className="smaller-text">{member.hobby}</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Eu Não Gosto de... </label>
                                <label className="smaller-text">{member.dislikes}</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Socialização: </label>
                                <label className="smaller-text">{member.socialization}</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Possui Habilidades Domésticas: </label>
                                <label className="smaller-text">{member.hasSkills}</label>
                            </div>
                            <div className="label-value">
                                <label className="legend">Modos de Contribuições: </label>
                                <ul>
                                    {member.contributions.map((task, idx) => (
                                        <li key={idx} className="smaller-text">{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    }
                />
            )}
        </div>
    );
};

export default MemberCard;
