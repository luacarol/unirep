import Header from '../Header/index';
import Footer from '../Footer/index';
import styles from './style.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.body}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
