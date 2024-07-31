import styles from './style.module.css';
import AdditionalRepublicCard from '../../Cards/RepublicCards/AdditionalRepublicCard/index';
import MemberInfoCard from '../../Cards/MemberCards/MemberInfoCard';
import Layout from '../../Layout/index';

const Members = () => {
    return (
        <Layout>
            <div className={styles.container}>

                <h1 className={`title`}>Membros</h1>

                <div className={styles.content}>

                    <div className={`${styles.republicInfo} ${styles.section}`}>

                        <h2 className={`bigger-subtitle`}>Informações da república</h2>

                        <AdditionalRepublicCard />

                    </div>

                    <div className={`${styles.membersInfo} ${styles.section}`}>

                        <h2 className={`bigger-subtitle`}>Informações dos membros</h2>

                        <div className={styles.membersSection}>
                            <MemberInfoCard />
                            <MemberInfoCard />
                            <MemberInfoCard />
                            <MemberInfoCard />
                        </div>

                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Members;