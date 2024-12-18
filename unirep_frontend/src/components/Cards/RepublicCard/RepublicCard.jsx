import IconButton from "../../Buttons/IconButton/IconButton";
import Chip from "../../Chip/Chip";
import styles from "./RepublicCard.module.css";
import { faHeart, faHouse, faTransgender } from '@fortawesome/free-solid-svg-icons';

const RepublicCard = ({ onClick }) => {
    return (
        <div className={styles.card_container} onClick={onClick}>

            <div className={styles.image_section}>
                {/* <img className={styles.republic_image} alt="Logo of the republic"/> */}
            </div>

            <div className={styles.information_section}>

                <div className={styles.value_section}>
                    <h3 className="label">R$ 400,00</h3>
                </div>

                <div className={styles["textual-information_section"]}>
                    <div className={styles.name_section}>
                        <h2 className="subtitle">Freud's Republic</h2>
                    </div>

                    <div className={styles.description_section}>
                        <h4 className="section">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</h4>
                    </div>
                </div>

                <div className={styles["chips-and-heart-button-_section"]}>
                    <div className={styles.chips_section}>
                        <Chip icon={faTransgender} text="Mista" />
                        <Chip icon={faHouse} text="Casa" />
                    </div>

                    <div className={styles["heart-button_section"]}>
                        <IconButton icon={faHeart} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default RepublicCard;