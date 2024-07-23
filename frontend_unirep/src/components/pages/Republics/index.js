import RepublicCard from '../../Cards/RepublicCards/RepublicCard';
import Layout from '../../Layout';
import Search from '../../Search';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

const Republics = () => {
    const navigate = useNavigate();

    const handleRepublicCard = () => {
        navigate('/republic')
    }

    return (
        <Layout body={<div className={styles.container}>

            <h1 className={`title`}>Repúblicas</h1>

            <div className={styles.content}>
                <Search id={styles.searchRepublics} placeholder='Pesquise por uma república' />

                <div className={styles.cardContainer}>
                    <h2 className={`bigger-subtitle`}>Informações das repúblicas</h2>

                    <div className={styles.cards}>
                        <RepublicCard onClick={handleRepublicCard} />
                        <RepublicCard />
                        <RepublicCard />
                        <RepublicCard />
                    </div>
                </div>
            </div>

        </div>}>

        </Layout>
    )
}

export default Republics;