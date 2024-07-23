import styles from './style.module.css';
import republicImg from '../../../../assets/images/republic.svg';
import Button from '../../../Button';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MemberRepublicCard = () => {
    const navigate = useNavigate();

    const handleViewItemsToPay = () => {
        navigate('/itemstopay')
    }

    return (
        <div className={styles.container}>
            <img className={styles.republicImg} src={republicImg} alt='Home'></img>

            <div className={styles.republicInfo}>
                <label className='minor-subtitle'>Nome da República</label>
                
                <div className={styles.addres}>
                    <label className='text-commom'>Endereço, Bairro</label>
                    <label className='text-commom'>CEP, Cidade, Estado</label>
                </div>

                <label className='text-commom'>(00) 00000-00</label>
            </div>

            <div className={styles.descriptionInfo}>
                <label className='text-commom'>Descrição</label>
                
                <label className={`${styles.descriptionText} smaller-text`}>Curta descrição da cultura e da vibe dentro da república., falando de suas características físicas e peculiares.</label>

                <Button variant='navigationButton' label='Ver itens à pagar' icon={faChevronRight} onClick={handleViewItemsToPay} />
            </div>
        </div>
    )
}

export default MemberRepublicCard;