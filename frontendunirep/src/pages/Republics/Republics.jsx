import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import styles from './Republics.module.css';
import RepublicCard from '../../components/Cards/RepublicCard/RepublicCard';
import { useEffect, useState } from "react";

const Republics = () => {
    const [republics, setRepublics] = useState([]);

    useEffect(() => {
        const fetchRepublics = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/republics/');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setRepublics(data);

            } catch (error) {
                console.log("Error: ", error)
            } finally {
                console.log("finally")
            }
        };

        fetchRepublics();
    }, []);

    return (
        <Layout content={
            <div>
                <h1 className={`title`}>Repúblicas</h1>

                <Search className={styles.search} />

                <div className={styles.cards}>
                    {republics.map((republic) => (
                        <RepublicCard key={republic.id} republic={republic} />
                    ))}
                </div>
            </div>
        } />
    )
}

export default Republics;