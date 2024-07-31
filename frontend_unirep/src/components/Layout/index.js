import Header from '../Header/index';
import Footer from '../Footer/index';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='body'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;
