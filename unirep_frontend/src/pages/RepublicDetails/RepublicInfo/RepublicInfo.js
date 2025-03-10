import React, { useState } from "react";
import "./RepublicInfo.css";
import defaultRepublicPicture from "../../../assets/images/undraw_small_town_re_7mcn 1.svg";
import ButtonLine from "../../../components/Buttons/ButtonLine/ButtonLine";
import Modal from "../../../components/Modal/Modal";

const RepublicInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    // URL do Google Maps com coordenadas específicas (substitua com as reais)
    const googleMapsUrl = "https://www.google.com/maps?q=-23.55052,-46.633308";

    return (
        <section className="republic-section">
            <h3 className="bigger-subtitle">Informações da República</h3>

            <div className="content">
                <div>
                    <img className="republic-img" src={defaultRepublicPicture} alt="Republic logo" />
                </div>

                <div className="basic-infos">
                    <label className="legend">Nome da República</label>
                    <label className="smaller-text description">Descrição sobre a república e localização.</label>
                </div>

                <div className="basic-infos">
                    <label className="smaller-text">Contato do Representante</label>
                    <label className="smaller-text">Quantidade de Membros</label>
                </div>

                <div className="basic-infos">
                    <ButtonLine text="Endereço" onClick={handleOpenModal} />
                    <ButtonLine text="Imagens e Vídeos" />
                </div>
            </div>

            {isModalOpen && (
                <Modal
                    title="Endereço da República"
                    handleOpenModal={handleOpenModal}
                    handleCloseModal={handleCloseModal}
                    infos={
                        <div className="map-card-container">
                            <div className="section">
                                <label className="legend">Endereço:</label>
                                <label className="smaller-text">Av. Júlio Cézar Vilaça, 478.<br />Jardim Santo Onofre.<br />São José dos Campos, SP.</label>
                            </div>

                            <div className="section">
                                <label className="legend">Localização no Google Maps:</label>
                                {/* Card Interativo para Localização */}
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-card"
                                >
                                    <img
                                        src={`https://static-maps.yandex.ru/1.x/?lang=en-US&ll=-46.633308,-23.55052&z=15&l=map&size=600,300`}
                                        alt="Mapa da República"
                                        className="map-image"
                                    />
                                </a>
                            </div>
                        </div>
                    }
                />
            )}
        </section>
    )
}

export default RepublicInfo;
