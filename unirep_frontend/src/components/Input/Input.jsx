import styles from "./Input.module.css";

const Input = ({ id, label, type }) => {
    return (
        <div className={styles["label-input_container"]}>
            <label htmlFor={id} className={`section ${styles.label}`}>{label}</label>
            <input id={id} className={`section ${styles.input}`} type={type} />
        </div>
    )
}

export default Input;