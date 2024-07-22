import styles from './style.module.css';
import republicImg from '../../../../assets/images/republic.svg';

const RepublicCard = () => {
    return (
        <div className={styles.container}>

            <div className={styles.republicImgSection}>
                <img className={styles.republicImg} src={republicImg} alt='Republic' />
            </div>

            <div className={styles.republicInfo}>
                <label className={`legend ${styles.republicNameLabel}`}>Nome da república</label>
                
                <div className={styles.numMembers}>
                    <label className={`legend`}>Quantidade de membros</label>
                </div>

                <div className={styles.description}>
                    <label className={`legend ${styles.descriptionLabel}`}>Descrição breve de como é ou qual é a essência da república</label>
                </div>

                <label className={`legend ${styles.republicValue}`}>R$ 400,00</label>
            </div>

        </div>
    )
}

export default RepublicCard;
