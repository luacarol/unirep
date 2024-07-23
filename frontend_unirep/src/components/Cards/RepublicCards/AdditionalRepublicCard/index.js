import styles from './style.module.css';
import republicImg from '../../../../assets/images/republic.svg';

const AdditionalRepublicCard = () => {
    return (
        <div className={styles.container}>

            <img src={republicImg} alt='Republic' />

            <div className={styles.republicInfo}>
                <label className='minor-subtitle'>Nome da República</label>

                <div className={styles.addres}>
                    <label className='text-commom'>Endereço, Bairro</label>
                    <label className='text-commom'>CEP, Cidade, Estado</label>
                </div>

                <label className='text-commom'>(00) 00000-00</label>

                <label className='text-commom'>Quantidade de membros</label>
            </div>

            <div className={styles.descriptionInfo}>
                <label className='text-commom'>Descrição</label>

                <label className={`${styles.descriptionText} smaller-text`}>Curta descrição da cultura e da vibe dentro da república., falando de suas características físicas e peculiares.</label>

                <label className={`${styles.valueTotalItem} text-commom`}>Valor total dos itens: R$ 400,00</label>
            </div>

        </div>
    )
}

export default AdditionalRepublicCard;