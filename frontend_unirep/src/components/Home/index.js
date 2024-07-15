import ProfileCard from '../Cards/ProfileCard';
import RepublicCard from '../Cards/RepublicCard';
import styles from './style.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className='title'>Home</h1>

            <div className={styles.content}>
                <section className={styles.profileSection}>
                    <h2 className='bigger-subtitle'>Meu perfil</h2>
                    <ProfileCard/>
                </section>

                <section className={styles.myHomeSection}>
                    <h2 className='bigger-subtitle'>Minha moradia</h2>
                    <RepublicCard />
                </section>

                <section className={styles.membersSection}>
                    <h2 className='bigger-subtitle'>Membros</h2>
                </section>
            </div>
        </div>
    )
}

export default Home;