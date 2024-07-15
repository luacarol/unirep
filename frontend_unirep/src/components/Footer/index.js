import styles from './style.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <label className='legend'>Unirep</label>
            {/* <label className={`${styles.madeByText} smaller-text`}>Feito por: Luana Anjos</label> */}
        </footer>
    )
}

export default Footer;