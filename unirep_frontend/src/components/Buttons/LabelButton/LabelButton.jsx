import styles from "./LabelButton.module.css";

const LabelButton = ({ label, onClick }) => {
    return (
        <button className={styles["icon-label_button"]} onClick={onClick}>
            <label className={`section ${styles.label}`}>{label}</label>
        </button>
    )
}

export default LabelButton;