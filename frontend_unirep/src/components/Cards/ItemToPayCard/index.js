import styles from './style.module.css';
import itemImg from '../../../assets/images/item.svg';
import Button from '../../Button/index';

const ItemToPayCard = () => {
    return (
        <div className={styles.container}>

            <div className={styles.imgNameItem}>

                <img className={styles.itemImg} src={itemImg} alt='Item'/>

                <label className={`legend`}>Aluguel</label>

            </div>

            <label className={`smaller-text`}>R$ 140,00</label>

            <label className={`legend`}>Vencimento: 12/12/2023</label>

            <Button id={styles.toPayButton} variant='labelButton' label='Pagar'></Button>

        </div>
    )
}

export default ItemToPayCard;