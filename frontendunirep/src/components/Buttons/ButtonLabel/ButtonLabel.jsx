import styles from './ButtonLabel.module.css';

const ButtonLabel = ({ id, className, text, onClick }) => {
    return (
        <button 
            id={id} 
            className={`${className} ${styles.button}`}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonLabel;