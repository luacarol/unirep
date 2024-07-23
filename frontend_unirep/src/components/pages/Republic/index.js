import styles from './style.module.css';
import MemberCarousel from '../../Carousels/MemberCarousel/index';
import Layout from '../../Layout';
import ItemToPayCarousel from '../../Carousels/ItemToPayCarousel';
import AdditionalRepublicCard from '../../Cards/RepublicCards/AdditionalRepublicCard';

const Republic = () => {
    return (
        <Layout body={<div className={styles.container}>

            <h1 className={`title`}>República</h1>

            <div className={styles.content}>

                <div className={`${styles.generalInfo} ${styles.section}`}>

                    <h2 className={`bigger-subtitle`}>Informações gerais</h2>

                    <AdditionalRepublicCard/>

                </div>

                <div className={`${styles.memberInfo} ${styles.section}`}>

                    <h2 className={`bigger-subtitle`}>Informações dos membros</h2>

                    <MemberCarousel />

                </div>

                <div className={`${styles.itensToBePayInfo} ${styles.section}`}>

                    <h2 className={`bigger-subtitle`}>Informações dos itens à pagar</h2>

                    <ItemToPayCarousel/>

                </div>

            </div>

        </div>} />
    )
}

export default Republic;