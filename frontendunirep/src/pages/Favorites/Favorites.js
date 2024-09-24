import RepublicCard from '../../components/Cards/RepublicCard/RepublicCard';
import Layout from '../../components/Layout/Layout';
import style from './Favorites.module.css';

const Favorites = () => {
    return (
        <Layout content={
            <div className={style.container}>

                <h1 className={`title ${style.title}`}>Repúblicas Favoritas</h1>

                <div className={style.republicCards}>
                    <RepublicCard />
                    <RepublicCard />
                    <RepublicCard />
                    <RepublicCard />
                    <RepublicCard />
                    <RepublicCard />
                    <RepublicCard />
                    <RepublicCard />
                </div>

            </div >
        }
        />
    )
}

export default Favorites;