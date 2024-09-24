import styles from './MemberDetailsModal.module.css';
import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const MemberDetailsModal = ({ onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            onClose(); // Fecha o modal se o clique for no overlay
        }
    };

    return (
        <div className={`overlay`} onClick={handleOverlayClick}>
            <div className={styles.container}>

                <div className={`${styles.flexRow} ${styles.section}`}>
                    <h2 className={`title`}>Informações do Membro</h2>
                    <ButtonIcon className={styles.xMarkButton} icon={faXmark} onlyIcon={true} onClick={onClose} />
                </div>

            </div>
        </div>
    )
}

export default MemberDetailsModal;