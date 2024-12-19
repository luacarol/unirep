import Chip from "../../Chip/Chip";
import styles from "./MemberCard.module.css";
import { faTransgender } from '@fortawesome/free-solid-svg-icons';

const MemberCard = () => {
    return (
        <div className={styles.container}>

            <div className={styles["profile-image_section"]}>

            </div>

            <div className={styles.information_section}>

                <h3 className="label">Nome do Membro</h3>

                <p className="label-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                <Chip icon={faTransgender} text="Mista" />

            </div>

        </div>
    )
}

export default MemberCard;