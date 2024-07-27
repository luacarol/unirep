import styles from './style.module.css';

const Input = ({ id, className, variant, label, name, value, onChange, placeholder, errorMessage, disabled, type = 'text' }) => {
    let content;

    if (variant === 'labelInput') {
        content = (
            <div id={id} className={`${className} ${styles.container}`}>
                <label className={`legend`}>{label}</label>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={styles.input}
                    disabled={disabled}
                />
                <label className={`${styles.errorMessage}`}>{errorMessage ? errorMessage : ''}</label>
            </div>
        )
    }

    return (
        content
    )
}

export default Input;
