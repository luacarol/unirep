import styles from './style.module.css';
import profileImg from '../../assets/images/profile.svg';

const EditProfile = () => {
    return (
        <div className={styles.container}>
            <h1 className='title'>Editar Perfil</h1>

            <div className={styles.userEditImg}>
                <img src={profileImg} alt='Profile'/>
            </div>
        </div>
    )
}

export default EditProfile;