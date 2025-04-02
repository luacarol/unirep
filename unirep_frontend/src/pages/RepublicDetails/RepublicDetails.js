import { useState } from "react";
import ButtonIcon from "../../components/Buttons/ButtonIcon/ButtonIcon";
import MemberCard from "../../components/MemberCard/MemberCard";
import Bills from "./Bills/Bills";
import "./RepublicDetails.css";
import RepublicInfo from "./RepublicInfo/RepublicInfo";
import Modal from "../../components/Modal/Modal";
import { useLocation } from "react-router-dom";

const mockMembers = [
    {
        name: "Luana dos Anjos",
        age: 22,
        course: "Análise e Desenvolvimento de Sistemas",
        hobby: "Jogar futebol",
        dislikes: "Cozinhar",
        socialization: "Introvertido",
        hasSkills: "Sim",
        contributions: ["Limpar banheiro", "Tirar pó de armários"]
    },
    {
        name: "Carlos Ferreira",
        age: 25,
        course: "Engenharia Civil",
        hobby: "Tocar violão",
        dislikes: "Acordar cedo",
        socialization: "Extrovertido",
        hasSkills: "Não",
        contributions: ["Lavar louça", "Organizar a sala"]
    },
    {
        name: "Mariana Souza",
        age: 21,
        course: "Psicologia",
        hobby: "Ler livros",
        dislikes: "Lugares barulhentos",
        socialization: "Introvertida",
        hasSkills: "Sim",
        contributions: ["Cozinhar", "Regar as plantas"]
    },
    {
        name: "Pedro Oliveira",
        age: 23,
        course: "Medicina",
        hobby: "Correr no parque",
        dislikes: "Ficar muito tempo no celular",
        socialization: "Meio termo",
        hasSkills: "Sim",
        contributions: ["Fazer compras", "Levar o lixo para fora"]
    }
];

const RepublicDetails = () => {
    const location = useLocation();
    const { republic } = location.state || {};
    // console.log("republic ", republic)

    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [isInfoConfirmModal, setIsInfoConfirmModal] = useState(false);

    const handleOpenRequestModal = () => setIsRequestModalOpen(true);
    const handleCloseRequestModal = () => setIsRequestModalOpen(false);

    const handleInfoConfirmModal = () => {
        setIsInfoConfirmModal(true);
        setTimeout(() => {
            setIsInfoConfirmModal(false);
            setIsRequestModalOpen(false);
        }, 4000); // Fecha automaticamente após 4 segundos
    };

    const handleCloseInfoConfirmModal = () => {
        setIsInfoConfirmModal(false);
        setIsRequestModalOpen(false);
    }

    let notMember = true;

    return (
        <div className="republic-details">
            <div className="title-button-section">
                <h2 className="bigger-subtitle">🏠 Detalhes da Moradia!</h2>

                {notMember && (
                    <div className="button">
                        <ButtonIcon
                            text="Solicitar Entrada"
                            iconClass="fa-solid fa-door-open"
                            onClick={handleOpenRequestModal}
                        />
                    </div>
                )}
            </div>

            <RepublicInfo republic={republic} />

            <Bills items={republic.items_to_pay} />

            <section className="section members-section">
                <h3 className="bigger-subtitle">Membros</h3>

                <div className="members-grid">
                    {republic.users.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </section>

            {/* Modal de Solicitação de Entrada */}
            {isRequestModalOpen && (
                <Modal
                    title="Solicitação de Entrada"
                    handleOpenModal={handleOpenRequestModal}
                    handleCloseModal={handleCloseRequestModal}
                    infos={
                        <div className="request-content-modal">
                            <label className="text-commom">Você deseja solicitar entrada nesta república?</label><br />
                            <label className="text-commom">Sua solicitação será enviada para análise.</label>

                            <div className="yes-no-buttons">
                                <ButtonIcon text="Confirmar" iconClass="fa-solid fa-check" onClick={handleInfoConfirmModal} />

                                {/* <ButtonIcon text="Cancelar" iconClass="fa-solid fa-ban" /> */}
                            </div>
                        </div>
                    }
                />
            )}

            {/* Modal de Informação de Confirmação */}
            {isInfoConfirmModal && (
                <Modal
                    title="Informação de Confirmação"
                    handleOpenModal={handleInfoConfirmModal}
                    handleCloseModal={handleCloseInfoConfirmModal}
                    infos={
                        <div className="info-confirm-content-modal">
                            <label className="text-commom">Sua solicitação de entrada na República Beta foi enviada para análise.</label>
                            <label className="text-commom">Aguarde a resposta do administrador</label>

                            <ButtonIcon iconClass="fa-solid fa-circle-check" onlyIcon={true} onClick={handleCloseInfoConfirmModal} />
                        </div>
                    }
                />
            )}
        </div>
    );
};

export default RepublicDetails;
