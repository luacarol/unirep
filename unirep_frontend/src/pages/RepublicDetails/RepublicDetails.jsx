import styles from "./RepublicDetails.module.css";

const RepublicDetails = () => {
    return (
        <div className={styles["republic-details_container"]}>
            <h1 className="title">Detalhes da República</h1>

            <div className={styles.content}>

                <div className={styles.section}>
                    <h2 className="subtitle">Informações da República</h2>

                    <div className={styles["labels-values_grid"]}>
                        <div className={styles["label-value_section"]}>
                            <label className={`label-light ${styles.label}`}>Nome da República: </label>
                            <label className={`label ${styles.value}`}>Republic's Name</label>
                        </div>

                        <div className={styles["label-value_section"]}>
                            <label className={`label-light ${styles.label}`}>Descrição da República: </label>
                            <label className={`label ${styles.value}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RepublicDetails;