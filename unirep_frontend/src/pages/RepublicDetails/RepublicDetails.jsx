import MemberCard from "../../components/Cards/MemberCard/MemberCard";
import LabelValue from "../../components/LabelValue/LabelValue";
import styles from "./RepublicDetails.module.css";

const RepublicDetails = () => {
    return (
        <div className={styles["republic-details_container"]}>
            <h1 className="title">Detalhes da República</h1>

            <div className={styles.content}>

                <div className={styles.section}>
                    <h2 className="subtitle">Informações</h2>

                    <div className={styles["labels-values_grid"]}>
                        <LabelValue label="Nome da República" value="Republic's Name" />

                        <LabelValue label="Descrição da República" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className="subtitle">Imagens</h2>

                    <div className={styles.images_section}>
                        <div className={styles.republic_image}></div>
                        <div className={styles.republic_image}></div>
                        <div className={styles.republic_image}></div>
                        <div className={styles.republic_image}></div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className="subtitle">Itens à Pagar</h2>

                    <LabelValue label="Àgua" value="R$ 54,00" />
                </div>

                <div className={styles.section}>
                    <h2 className="subtitle">Membros</h2>

                    <div className={styles.members_section}>
                        <MemberCard/>
                        <MemberCard/>
                        <MemberCard/>
                        <MemberCard/>
                        <MemberCard/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RepublicDetails;