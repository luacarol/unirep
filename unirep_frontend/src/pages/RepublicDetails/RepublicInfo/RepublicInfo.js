import React, { useState } from "react";
import "./RepublicInfo.css";
import defaultRepublicPicture from "../../../assets/images/undraw_small_town_re_7mcn 1.svg";
import ButtonLine from "../../../components/Buttons/ButtonLine/ButtonLine";
import Modal from "../../../components/Modal/Modal";
import itemIcon from "../../../assets/images/item_icon.svg";
import CarouselImages from "../../../components/CarouselImages/CarouselImages";

const RepublicInfo = () => {
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const handleAddressOpenModal = () => setIsAddressModalOpen(true);
    const handleAddressCloseModal = () => setIsAddressModalOpen(false);

    const [isImgsVideosModalOpen, setIsImgsVideosModalOpen] = useState(false);
    const handleImgsVideosOpenModal = () => setIsImgsVideosModalOpen(true);
    const handleImgsVideosCloseModal = () => setIsImgsVideosModalOpen(false);

    // URL do Google Maps com coordenadas específicas (substitua com as reais)
    const googleMapsUrl = "https://www.google.com/maps?q=-23.55052,-46.633308";

    const images = [itemIcon, itemIcon, itemIcon, itemIcon, defaultRepublicPicture, defaultRepublicPicture]; // Substitua por suas imagens reais

    let isMember = false;

    return (
        <section className="republic-section">
            <h3 className="bigger-subtitle">Informações da República</h3>

            <div className="content">
                <div>
                    <img className="republic-img" src={defaultRepublicPicture} alt="Republic logo" />
                </div>

                <div className="basic-infos">
                    <label className="legend">República Beta</label>
                    <label className="smaller-text">4 membros</label>
                    {isMember == true && <label className="smaller-text">(12) 982173927</label>}
                </div>

                <div className="basic-infos">
                    <label className="smaller-text description">Essa é a república Beta, gostamos de uma boa festa para unir laços</label>
                </div>

                <div className="basic-infos">
                    <ButtonLine className="address-button" text="Endereço" onClick={handleAddressOpenModal} />
                    <ButtonLine text="Imagens e Vídeos" onClick={handleImgsVideosOpenModal} />
                </div>
            </div>

            {isAddressModalOpen && (
                <Modal
                    title="Endereço da República"
                    handleOpenModal={handleAddressOpenModal}
                    handleCloseModal={handleAddressCloseModal}
                    infos={
                        <div className="map-card-container">
                            <div className="section">
                                <label className="legend">Endereço:</label>
                                <label className="smaller-text description">Av. Júlio Cézar Vilaça, 478.<br />Jardim Santo Onofre.<br />São José dos Campos, SP.</label>
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

            {isImgsVideosModalOpen && (
                <Modal
                    title="Imagens e Vídeos da República"
                    handleOpenModal={handleImgsVideosOpenModal}
                    handleCloseModal={handleImgsVideosCloseModal}
                    infos={
                        <CarouselImages images={images} />
                    }
                />
            )}
        </section>
    )
}

export default RepublicInfo;
