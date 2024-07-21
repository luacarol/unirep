import styles from './style.module.css';
import profileImg from '../../assets/images/profile.svg';
import Layout from '../Layout';
import Button from '../Button';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const EditProfile = () => {
    return (
        <Layout body={<div className={styles.container}>
            <h1 className='title'>Editar Perfil</h1>

            <div className={styles.userEditImg}>
                <img src={profileImg} alt='Profile' />
                <Button id={styles.editButton} variant='variant' icon={faPen}/>
            </div>

            <div className={styles.form}>

                <div className={styles.nameAge}>

                </div>

                <div className={styles.emailWhats}>

                </div>

                <div className={styles.courseHobbie}>

                </div>

                <div className={styles.dislike}>

                </div>

            </div>

            <Button variant='labelButton' label='Salvar' />
        </div>} />
    )
}

export default EditProfile;