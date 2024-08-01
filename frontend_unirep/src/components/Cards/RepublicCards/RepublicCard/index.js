import styles from './style.module.css';
import republicImg from '../../../../assets/images/republic.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const RepublicCard = ({ onClick }) => {
    return (
        <div className={styles.container} onClick={onClick}>

            <div className={styles.republicImgSection}>
                <img className={styles.republicImg} src={republicImg} alt='Republic' />
            </div>

            <div className={styles.republicInfo}>
                <label className={`legend ${styles.republicNameLabel}`}>Nome da república</label>
                
                <div className={`${styles.numMembers} ${styles.iconLabel}`}>
                    <FontAwesomeIcon icon={faPeopleGroup} className={styles.icon}/>
                    <label className={`legend`}>Quantidade de membros</label>
                </div>

                <div className={`${styles.description} ${styles.iconLabel}`}>
                    <FontAwesomeIcon icon={faNewspaper} className={styles.icon}/>
                    <label className={`small-text ${styles.descriptionLabel}`}>Descrição breve de como é ou qual é a essência da república</label>
                </div>

                <label className={`legend ${styles.republicValue}`}>R$ 400,00</label>
            </div>

        </div>
    )
}

export default RepublicCard;
