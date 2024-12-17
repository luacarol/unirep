import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header/>

      {/* Main Content */}
      <main className={styles.main}>
        {children}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Created by Luana Caroliny Pedroso de Oliveira</p>
      </footer>
    </div>
  );
};

export default Layout;
