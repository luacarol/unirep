import styles from './style.module.css';
import AdditionalRepublicCard from '../../Cards/RepublicCards/AdditionalRepublicCard/index';
import ItemToPayCarousel from '../../Carousels/ItemToPayCarousel/index';
import Layout from '../../Layout';

const ItemsToPay = () => {
    return (
        <Layout><div className={styles.container}>

            <h1 className={`title`}>Itens à pagar</h1>

            <div className={styles.content}>

                <div className={`${styles.republicInfo} ${styles.section}`}>

                    <h2 className={`bigger-subtitle`}>Informações da república</h2>

                    <AdditionalRepublicCard />

                </div>

                <div className={`${styles.itemsToPayIndo} ${styles.section}`}>

                    <h2 className={`bigger-subtitle`}>Informações dos itens à pagar</h2>

                    <ItemToPayCarousel />

                </div>

            </div>

        </div></Layout>
    )
}

export default ItemsToPay;