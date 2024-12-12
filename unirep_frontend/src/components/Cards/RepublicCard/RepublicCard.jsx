import styles from "./RepublicCard.module.css";

const RepublicCard = () => {
    return (
        <div className={styles.card_container}>

            <div className={styles.image_section}>
                <img className={styles.republic_image} alt="Logo of the republic"/>
            </div>

            <div className={styles.information_section}>
                <div className={styles.value_section}>
                    <h3>R$ 400,00</h3>
                </div>

                <div className={`styles.textual-information_section`}>
                    <div className={styles.name_section}>
                        <h2>Freud's Republic</h2>
                    </div>

                    <div className={styles.description_section}>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</h4>
                    </div>
                </div>

                <div className={styles.chips_section}>
                    {/* TODO: put here the "Chip" component  */}
                </div>

                <div className={`styles.heart-button_section`}>
                    {/* TODO: put here the "IconButton" component  */}
                </div>
            </div>

        </div>
    )
}

export default RepublicCard;