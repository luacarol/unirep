import styles from './style.module.css';
import profileImg from '../../../assets/images/profile.svg';

const MemberCard = () => {
    return (
        <div className={styles.container}>

            <div className={styles.imgNameUser}>
                <img className={styles.profileImg} src={profileImg} alt='Profile'></img>
                <label className='legend'>Nome do membro</label>
            </div>

            <label className={`${styles.userInfoText} smaller-text`}>Tenho 19 anos, curso Engenharia Civil, sou caseiro, gosto de jogar futebol, e não gosto de sentir cheiro de cigarro.</label>

        </div>
    )
}

export default MemberCard;