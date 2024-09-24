import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import LabelValue from '../../../components/LabelValue/LabelValue';
import Layout from '../../../components/Layout/Layout';
import styles from './DetailsRepublic.module.css';
import ButtonLabel from '../../../components/Buttons/ButtonLabel/ButtonLabel';
import Carrossel from '../../../components/Carousel/Carousel';
import MemberCard from '../../../components/Cards/MemberCard/MemberCard';
import { useState } from 'react';
import MemberDetailsModal from '../../../components/Modals/MemberDetailsModal/MemberDetailsModal';

const DetailsRepublic = () => {
    const breadcrumbItems = [
        { text: "Repúblicas", href: "/republics" },
        { text: "Freud's Republic", href: "/republics/1" }
    ];

    const [isMemberDetailsModalOpen, setIsMemberDetailsModalOpen] = useState(false);

    const handleMemberCard = () => {
        setIsMemberDetailsModalOpen(prevState => !prevState);
    }

    const closeModal = () => {
        setIsMemberDetailsModalOpen(false);
    };

    return (
        <Layout content={
            <div className={styles.container}>

                <Breadcrumb
                    items={breadcrumbItems}
                    activeItem="Freud's Republic"
                />

                <h1 className={`title ${styles.title}`}>Freud's Republic</h1>

                <section id={`${styles.locationInfoSection}`} className={`${styles.section}`}>
                    <h2 className={`subtitle ${styles.subtitle}`}>Informações de Localização</h2>

                    <div id={`${styles.locationInfoContent}`} className={`${styles.content}`}>

                        <div className={styles.column}>
                            <LabelValue className={styles.labelValue} textLabel="Endereço" textValue="Rua Antônio Fogaça de Almeida, 200" />
                            <LabelValue className={styles.labelValue} textLabel="Bairro" textValue="Jardim América" />
                            <LabelValue className={styles.labelValue} textLabel="CEP" textValue="12322-030" />
                        </div>

                        <div className={styles.column}>
                            <h4 className={`section ${styles.admContact}`}>Contato do Administrador:</h4>
                            <LabelValue className={styles.labelValue} textLabel="Whatsapp" textValue="(12) 972173929" />
                            <LabelValue className={styles.labelValue} textLabel="Nome" textValue="Luana Caroliny" />

                        </div>

                        <ButtonLabel className={styles.seeGoogleMapsButton} text="Ver no Google Maps" />

                    </div>

                </section>

                <section id={`${styles.imgsOfTheRoomsSection}`} className={`${styles.section}`}>
                    <h2 className={`subtitle ${styles.subtitle}`}>Imagens dos Cômodos</h2>
                    <Carrossel />
                </section>

                <section id={`${styles.itemsToPaySection}`} className={`${styles.section}`}>
                    <h2 className={`subtitle ${styles.subtitle}`}>Itens à Pagar</h2>

                    <h3 className={`label ${styles.colorCyan}`}>Valor total: R$ 400,00</h3>

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

                    <h3 className={`label ${styles.colorCyan}`}>Quantidade de Membros: 3 pessoas</h3>

                    <div className={styles.memberCards}>
                        <MemberCard onClick={handleMemberCard} />
                        <MemberCard />
                        <MemberCard />
                        <MemberCard />
                        <MemberCard />
                        <MemberCard />
                    </div>

                </section>

                {isMemberDetailsModalOpen && (
                    <MemberDetailsModal onClose={closeModal} />
                )}

            </div>}
        />
    )
}

export default DetailsRepublic;
