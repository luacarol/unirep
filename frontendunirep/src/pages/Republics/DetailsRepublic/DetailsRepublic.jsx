import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import LabelValue from '../../../components/LabelValue/LabelValue';
import Layout from '../../../components/Layout/Layout';
import styles from './DetailsRepublic.module.css';
import ButtonLabel from '../../../components/Buttons/ButtonLabel/ButtonLabel';
import Carrossel from '../../../components/Carousel/Carousel';
import MemberCard from '../../../components/Cards/MemberCard/MemberCard';
import { useEffect, useState } from 'react';
import MemberDetailsModal from '../../../components/Modals/MemberDetailsModal/MemberDetailsModal';
import { useParams } from 'react-router-dom';
import ConfirmationModal from '../../../components/Modals/ConfirmationModal/ConfirmationModal';
import Loading from '../../../components/Loading/Loading';

const DetailsRepublic = () => {
    const { id } = useParams(); // Obtém o ID da república da URL
    const [republic, setRepublic] = useState('');
    const [membersID, setMembersID] = useState([]);

    useEffect(() => {
        const fetchRepublic = async () => {
            try {
                const token = localStorage.getItem('access_token'); // Get the token from localStorage
                const response = await fetch(`http://localhost:8000/api/repubics/republics/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setRepublic(data);
                setMembersID(data.members)

            } catch (error) {
                console.log("Error: ", error)
            }
        };

        fetchRepublic();
    }, [id]);

    const breadcrumbItems = [
        { text: "Repúblicas", href: "/republics" },
        { text: `${republic.name}`, href: `${republic.id}` }
    ];

    const [isMemberDetailsModalOpen, setIsMemberDetailsModalOpen] = useState(false);
    const [isRequestEntryModalOpen, setIsRequestEntryModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState('');

    const handleMemberCard = (memberID) => {
        setSelectedMember(memberID)
        setIsMemberDetailsModalOpen(prevState => !prevState);
    }

    const handleRequestEntry = () => {
        setIsRequestEntryModalOpen(true);
    };

    const closeModal = () => {
        setIsMemberDetailsModalOpen(false);
        setIsRequestEntryModalOpen(false);
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleYesConfirmation = () => {
        console.log("Yes confirmation")
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            closeModal();
        }, 3000);
    }

    const handleNoConfirmation = () => {
        console.log("No confirmation")
        closeModal();
    }

    const handleGoogleMapsClick = () => {
        const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(republic.address)}`;
        window.open(googleMapsUrl, '_blank');
    }

    return (
        <Layout content={
            <div className={styles.container}>
                <Breadcrumb
                    items={breadcrumbItems}
                    activeItem={republic.name}
                />

                <div id={styles.titleAndButton}>
                    <h1 className={`title ${styles.title}`}>{republic.name}</h1>

                    <ButtonLabel text="Solicitar Entrada" onClick={handleRequestEntry} />
                </div>

                <section id={`${styles.locationInfoSection}`} className={`${styles.section}`}>
                    <h2 className={`subtitle ${styles.subtitle}`}>Informações de Localização</h2>

                    <div id={`${styles.locationInfoContent}`} className={`${styles.content}`}>

                        <div className={styles.column}>
                            <LabelValue className={styles.labelValue} textLabel="Endereço" textValue={republic.address} />
                            <LabelValue className={styles.labelValue} textLabel="Bairro" textValue={republic.neighborhood} />
                            <LabelValue className={styles.labelValue} textLabel="CEP" textValue={republic.postal_code} />
                        </div>

                        <div className={styles.column}>
                            <h4 className={`section ${styles.admContact}`}>Contato do Administrador:</h4>
                            <LabelValue className={styles.labelValue} textLabel="Whatsapp" textValue="(12) 972173929" />
                            <LabelValue className={styles.labelValue} textLabel="Nome" textValue="Luana Caroliny" />

                        </div>

                        <ButtonLabel className={styles.seeGoogleMapsButton} text="Ver no Google Maps" onClick={handleGoogleMapsClick} />

                    </div>

                </section>

                <section id={`${styles.imgsOfTheRoomsSection}`} className={`${styles.section}`}>
                    <h2 className={`subtitle ${styles.subtitle}`}>Imagens dos Cômodos</h2>
                    <Carrossel />
                </section>

                <section id={`${styles.itemsToPaySection}`} className={`${styles.section}`}>
                    <h2 className={`subtitle ${styles.subtitle}`}>Itens à Pagar</h2>

                    <h3 className={`label ${styles.colorCyan}`}>Valor total: R$ {republic.value}</h3>

                    <div id={`${styles.itemsToPayContent}`} className={`${styles.content}`}>

                        <div className={styles.column}>
                            <LabelValue className={styles.labelValue} textLabel="Aluguel" textValue="R$ 150,00" />
                            <LabelValue className={styles.labelValue} textLabel="Água" textValue="R$ 40,00" />
                            <LabelValue className={styles.labelValue} textLabel="Energia" textValue="R$ 30,00" />
                        </div>

                        <div className={styles.column}>
                            <LabelValue className={styles.labelValue} textLabel="Gás" textValue="R$ 16,00" />
                            <LabelValue className={styles.labelValue} textLabel="Internet" textValue="R$ 99,00" />
                            <LabelValue className={styles.labelValue} textLabel="Condomínio" textValue="R$ 65,00" />
                        </div>

                    </div>

                </section>

                <section id={`${styles.memberInfoSection}`} className={`${styles.section}`}>

                    <h2 className={`subtitle ${styles.subtitle}`}>Informações dos Membros</h2>

                    <h3 className={`label ${styles.colorCyan}`}>Quantidade de Membros: {membersID.length} pessoas</h3>

                    <div className={styles.memberCards}>
                        {membersID.map((memberID) => (
                            <MemberCard
                                key={memberID} // Use memberID diretamente se for um ID único
                                memberID={memberID} // Passar o ID como props, se necessário
                                onClick={() => handleMemberCard(memberID)} // Certifique-se de passar o ID correto
                            />
                        ))}
                    </div>

                </section>

                {isMemberDetailsModalOpen && (
                    <MemberDetailsModal selectedMember={selectedMember} onClose={closeModal} />
                )}

                {isRequestEntryModalOpen && (
                    <ConfirmationModal text="Tem certeza que deseja confirmar sua solicitação de entrada?"
                        onClose={closeModal}
                        onYesClick={handleYesConfirmation}
                        onNoClick={handleNoConfirmation}
                    />
                )}

                {isLoading && (
                    <Loading />
                )}

            </div>}
        />
    )
}

export default DetailsRepublic;
