import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import styles from './Republics.module.css';
import RepublicCard from '../../components/Cards/RepublicCard/RepublicCard';
import { useNavigate } from 'react-router-dom';

const Republics = () => {
    const navigate = useNavigate();

    const handleRepublicCard = () => {
        navigate('/detailsrepublic');
    }

    return (
        <Layout content={
            <div>
                <h1 className={`title`}>Repúblicas</h1>

                <Search className={styles.search}/>

                <div className={styles.cards}>

                    <RepublicCard onClick={handleRepublicCard} />
                    <RepublicCard/>
                    <RepublicCard/>
                    <RepublicCard/>
                    <RepublicCard/>
                    <RepublicCard/>
                    
                </div>
            </div>
        } />
    )
}

export default Republics;