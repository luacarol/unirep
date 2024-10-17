import styles from './InputText.module.css'

const InputText = ({ id, className, label, value }) => {
    return (
        <div className={styles.container}>
            <label htmlFor={id} className={`section`}>{label}</label>
            <input id={id} value={value}></input>
        </div>
    )
}

export default InputText;