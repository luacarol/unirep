import styles from "./LabelValue.module.css";

const LabelValue = ({ label, value }) => {
    return (
        <div className={styles["label-value_section"]}>
            <label className={`label-light ${styles.label}`}>{label}: </label>
            <label className={`label ${styles.value}`}>{value}</label>
        </div>
    )
}

export default LabelValue;