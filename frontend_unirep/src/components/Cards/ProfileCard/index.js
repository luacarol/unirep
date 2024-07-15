import styles from './style.module.css'
import profileImg from '../../../assets/images/profile.svg';
import Button from '../../Button';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = () => {
    return (
        <div className={styles.container}>
            <img className={styles.profileImg} src={profileImg} alt='Profile'></img>

            <div className={styles.userInfo}>
                <label className='minor-subtitle'>Nome do usuário</label>
                <label className='text-commom'>Idade anos</label>
                <label className='text-commom'>(00) 00000-0000</label>
            </div>

            <div className={styles.descriptionInfo}>
                <label className='text-commom'>Descrição</label>
                
                <label className={`${styles.descriptionText} smaller-text`}>Descrição curta do perfil do usuário falando da sua personalidade.</label>

                <Button variant='navigationButton' label='Editar perfil' icon={faChevronRight} />
            </div>

        </div>
    )
}

export default ProfileCard;