import styles from './style.module.css';
import profileImg from '../../../../assets/images/profile.svg';

const MemberInfoCard = () => {
    return (
        <div className={styles.container}>

            <img className={styles.profileImg} src={profileImg} alt='Profile'/>

            <div className={styles.memberInfo}>

                <label className={`smaller-text`}>Nome do membro</label>

                <div className={styles.addInfo}>

                    <label className={`legend`}>Cursando: nome do curso</label>
                    <label className={`legend`}>Meu hobbie é jogar bola</label>
                    <label className={`legend`}>Eu não gosto de barulho</label>

                </div>

                <label className={`${styles.whatsLabel} legend`}>(12) 4000289-22</label>

            </div>

        </div>
    )
}

export default MemberInfoCard;