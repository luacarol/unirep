import React, { useState } from "react";
import "./RepublicInfo.css";
import defaultRepublicPicture from "../../../assets/images/undraw_small_town_re_7mcn 1.svg";
import ButtonLine from "../../../components/Buttons/ButtonLine/ButtonLine";
import Modal from "../../../components/Modal/Modal";
import itemIcon from "../../../assets/images/item_icon.svg";

const RepublicInfo = ({ republic }) => {

    // Inicializando os estados de modal
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [isImgsVideosModalOpen, setIsImgsVideosModalOpen] = useState(false);

    const handleAddressOpenModal = () => setIsAddressModalOpen(true);
    const handleAddressCloseModal = () => setIsAddressModalOpen(false);

    const handleImgsVideosOpenModal = () => setIsImgsVideosModalOpen(true);
    const handleImgsVideosCloseModal = () => setIsImgsVideosModalOpen(false);

    // Garantir que o endereço tenha coordenadas
    const { latitude, longitude } = republic.address || {};
    const googleMapsUrl = latitude && longitude
        ? `https://www.google.com/maps?q=${latitude},${longitude}`
        : "https://www.google.com/maps";  // Caso as coordenadas não existam, link padrão para o Google Maps

    const images = [itemIcon, itemIcon, itemIcon, itemIcon, defaultRepublicPicture, defaultRepublicPicture]; // Substitua por suas imagens reais

    // Lógica condicional sobre o membro
    const isMember = false; // Simulação de membro, pode vir de lógica de usuário logado

    return (
        <section className="republic-section">
            <h3 className="bigger-subtitle">Informações da República</h3>

            <div className="content">
                <div>
                    <img className="republic-img" src={defaultRepublicPicture} alt="Republic logo" />
                </div>

                <div className="basic-infos">
                    <label className="legend">{republic.name}</label>
                    <label className="smaller-text">{republic.number_of_members} membros</label>
                    <label className="smaller-text">R$ {republic.rent}</label>
                </div>

                <div className="basic-infos">
                    <label className="smaller-text description">{republic.description}</label>
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
                                <label className="smaller-text description">
                                    {republic.address.street}, {republic.address.number}.<br />
                                    {republic.address.neighborhood}.<br />
                                    {republic.address.city}, {republic.address.state}.
                                </label>
                            </div>

                            <div className="section">
                                <label className="legend">Localização no Google Maps:</label>
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-card"
                                >
                                    <img
                                        src={`https://static-maps.yandex.ru/1.x/?lang=en-US&ll=${longitude},${latitude}&z=15&l=map&size=600,300`}
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
                        <div className="imgs-videos-content-modal">
                            <div className="imgs-videos-grid">
                                <img src={defaultRepublicPicture} alt="Republic logo"/>
                                <img src={defaultRepublicPicture} alt="Republic logo"/>
                                <img src={defaultRepublicPicture} alt="Republic logo"/>
                                <img src={defaultRepublicPicture} alt="Republic logo"/>
                                <img src={defaultRepublicPicture} alt="Republic logo"/>
                                <img src={defaultRepublicPicture} alt="Republic logo"/>
                                <img src={defaultRepublicPicture} alt="Republic logo"/>
                                <img src={defaultRepublicPicture} alt="Republic logo"/>
                                <img src={defaultRepublicPicture} alt="Republic logo"/>
                                <img src={defaultRepublicPicture} alt="Republic logo"/>
                            </div>
                        </div>
                    }
                />
            )}
        </section>
    );
};

export default RepublicInfo;
