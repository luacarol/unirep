import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';
import styles from './ConfirmationModal.module.css';
import ButtonLabel from '../../Buttons/ButtonLabel/ButtonLabel';

const ConfirmationModal = ({ text, onClose, onYesClick, onNoClick }) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose(); // Fecha o modal se o clique for no overlay
        }
    };

    return (
        <div className={`overlay`} onClick={handleOverlayClick}>
            <div className={styles.container}>
                <div id={styles.titleAndButtonSection}>
                    <h2 className={`title`}>Confirmação</h2>

                    <ButtonIcon icon={faXmark} onlyIcon={true} onClick={onClose} />
                </div>

                <p className={`${styles.text} section`}>{text}</p>

                <div className={styles.buttonsSection}>
                    <ButtonLabel className={styles.button} text="Sim" onClick={onYesClick} />
                    <ButtonLabel className={styles.button} text="Não" onClick={onNoClick} />
                </div>
            </div>
        </div>

    )
}

export default ConfirmationModal;