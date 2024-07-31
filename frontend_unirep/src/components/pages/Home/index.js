import ProfileCard from '../../Cards/ProfileCard';
import RepublicCard from '../../Cards/RepublicCards/MemberRepublicCard/index';
import MemberCarousel from '../../Carousels/MemberCarousel';
import Layout from '../../Layout';
import styles from './style.module.css';

const Home = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className='title'>Home</h1>

                <div className={styles.content}>
                    <section className={styles.profileSection}>
                        <h2 className='bigger-subtitle'>Meu perfil</h2>
                        <ProfileCard />
                    </section>

                    <section className={styles.myHomeSection}>
                        <h2 className='bigger-subtitle'>Minha moradia</h2>
                        <RepublicCard />
                    </section>

                    <section className={styles.membersSection}>
                        <h2 className='bigger-subtitle'>Membros</h2>
                        <MemberCarousel />
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default Home;