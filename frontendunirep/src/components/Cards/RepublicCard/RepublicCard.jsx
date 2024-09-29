import Chip from '../../Chip/Chip';
import styles from './RepublicCard.module.css';
import { faHouse, faTransgender } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const RepublicCard = ({ republic }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/republics/${republic.id}`); // Navega para a página de detalhes da república
    };

    return (
        <div className={styles.container} onClick={handleClick}>

            <div className={styles.imgSection}>
            </div>

            <div className={styles.infoSection}>
                <label className={`${styles.valueLabel}`}>R$ {republic.value}</label>

                <div className={styles.republicInfo}>
                    <h2 className={`subtitle ${styles.republicName}`}>{republic.name}</h2>

                    <label className={`${styles.republicInfoLabel}`}>{republic.description}</label>

                </div>

                <div className={styles.additional}>
                    <div className={styles.chips}>
                        <Chip icon={faHouse} text={republic.housing_type} />
                        <Chip icon={faTransgender} text={republic.community_type} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RepublicCard;