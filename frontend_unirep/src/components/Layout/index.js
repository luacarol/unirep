import Header from '../Header/index';
import Footer from '../Footer/index';

const Layout = ({ body }) => {
    return (
        <>
            <Header />
            <div className='body'>
                {body}
            </div>
            <Footer />
        </>
    )
}

export default Layout;