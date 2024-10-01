import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import styles from './Republics.module.css';
import RepublicCard from '../../components/Cards/RepublicCard/RepublicCard';
import NoData from '../../components/NoData/NoData';
import { useEffect, useState } from "react";

const Republics = () => {
    const [republics, setRepublics] = useState([]);
    const [filteredRepublics, setFilteredRepublics] = useState([]); // Estado para repúblicas filtradas

    useEffect(() => {
        const fetchRepublics = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/repubics/republics/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRepublics(data);
                setFilteredRepublics(data); // Inicialmente, exibe todas as repúblicas
            } catch (error) {
                console.log("Error: ", error);
            }
        };
        fetchRepublics();
    }, []);

    const handleSearch = (searchTerm) => {
        // Filtra repúblicas com base no nome
        const filtered = republics.filter(republic =>
            republic.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRepublics(filtered); // Atualiza o estado com as repúblicas filtradas
    };

    return (
        <Layout content={
            <div className={styles.container}>
                <h1 className={`title`}>Repúblicas</h1>
                <Search className={styles.search} onSearch={handleSearch} />
                <div className={styles.cards}>
                    {filteredRepublics.length > 0 ? (
                        filteredRepublics.map((republic) => (
                            <RepublicCard key={republic.id} republic={republic} />
                        ))
                    ) : (
                        <div className={styles.noDataWrapper}>
                            <NoData />
                        </div>
                    )}
                </div>
            </div>
        } />
    );
}

export default Republics;
