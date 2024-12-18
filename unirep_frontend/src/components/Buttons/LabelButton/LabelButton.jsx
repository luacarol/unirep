import styles from "./LabelButton.module.css";

const LabelButton = ({ label }) => {
    return (
        <button className={styles["icon-label_button"]}>
            <label className={`section ${styles.label}`}>{label}</label>
        </button>
    )
}

export default LabelButton;