import styles from './style.module.css';

const Input = ({ id, variant, label, placeholder }) => {
    let content;

    if (variant === 'labelInput') {
        content = (
            <div className={styles.container}>
                <label className={`legend`}>{label}</label>
                <input type='text' placeholder={placeholder} className={styles.input} />
            </div>
        )
    }

    return (
        content
    )
}

export default Input;