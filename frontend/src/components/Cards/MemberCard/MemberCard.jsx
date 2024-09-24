import { faVenus } from '@fortawesome/free-solid-svg-icons';
import styles from './MemberCard.module.css';
import Chip from '../../Chip/Chip';

const MemberCard = ({ onClick }) => {
    return (
        <div className={styles.container} onClick={onClick}>

            <div className={styles.imgSection}>
            </div>

            <div className={styles.infoSection}>
                <label className={`${styles.valueLabel}`}>(12) 982173929</label>

                <div className={styles.memberInfo}>
                    <h2 className={`subtitle ${styles.membeName}`}>Luana Anjos</h2>

                    <label className={`${styles.membeInfoLabel}`}>Tenho 24 anos e sou estudante de Análise e Desenvolvimento de Sistemas.</label>

                </div>

                <div className={styles.additional}>
                    <div className={styles.chips}>
                        <Chip icon={faVenus} text="Feminino" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MemberCard;