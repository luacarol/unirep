import styles from './style.module.css';
import profileImg from '../../assets/images/profile.svg';
import Layout from '../Layout';
import Button from '../Button';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';

const EditProfile = () => {
    return (
        <Layout body={<div className={styles.container}>
            <h1 className='title'>Editar Perfil</h1>

            <div className={styles.userEditImg}>
                <img src={profileImg} alt='Profile' />
                <Button id={styles.editButton} variant='variant' icon={faPen} />
            </div>

            <div className={styles.form}>

                <div className={styles.nameAge}>
                    <Input variant='labelInput' label='Nome' placeholder='Nome do usuário' />
                    <Input variant='labelInput' label='Idade' placeholder='19 anos' />
                </div>

                <div className={styles.emailWhats}>
                    <Input variant='labelInput' label='E-mail' placeholder='luanacaroliny07@gmail.com' />
                    <Input variant='labelInput' label='Whatsapp' placeholder='12 982173929' />
                </div>

                <div className={styles.courseHobbie}>
                    <Input variant='labelInput' label='Qual curso você está cursando?' placeholder='Analise e Desenvolvimento de Sistemas' />
                    <Input variant='labelInput' label='Hobbie preferido?' placeholder='Jogar bola' />
                </div>

                <div className={styles.dislike}>
                    <Input variant='labelInput' label='Eu não gosto de...' placeholder='Barulho a noite, sentir cheiro de cigarro e desorganização.' />   
                </div>

            </div>

            <Button variant='labelButton' label='Salvar' />
        </div>} />
    )
}

export default EditProfile;