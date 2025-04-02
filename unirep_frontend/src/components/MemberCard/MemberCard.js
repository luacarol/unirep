import React, { useState } from "react";
import "./MemberCard.css";
import userProfile from "../../assets/images/user.svg";
import Modal from "../Modal/Modal";

const MemberCard = ({ member }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    console.log("member ", member);

    // Mapeamento de nomes amigáveis para os atributos
    const fieldLabels = {
        name: "Nome",
        age: "Idade",
        phone_number: "Número de Telefone",
        course: "Curso",
        favorite_hobby: "Hobbie Preferido",
        dislikes: "Não Gosta de",
        socialization: "Nível de Socialização",
        hasSkills: "Habilidades Domésticas",
        contributions: "Modos de Contribuição",
    };

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
                        <div className="modal-infos">
                            {Object.keys(member)
                                .filter((key) => key !== "id") // Remove o ID
                                .map((key) => (
                                    <div key={key} className="label-value">
                                        <label className="legend">
                                            {fieldLabels[key] || key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                                        </label>
                                        <label className="smaller-text">
                                            {Array.isArray(member[key])
                                                ? member[key].join(", ") // Exibe arrays como lista separada por vírgulas
                                                : member[key] ?? "Não informado"} {/* Evita valores null/undefined */}
                                        </label>
                                    </div>
                                ))}
                        </div>
                    }
                />
            )}
        </div>
    );
};

export default MemberCard;
