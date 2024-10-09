import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import styles from './Republics.module.css';
import RepublicCard from '../../components/Cards/RepublicCard/RepublicCard';
import NoData from '../../components/NoData/NoData';
import { useEffect, useState } from "react";

const Republics = () => {
    const [republics, setRepublics] = useState([]);
    const [filteredRepublics, setFilteredRepublics] = useState([]); // State for republics filtered

    useEffect(() => {
        const fetchRepublics = async () => {
            try {
                const token = localStorage.getItem('access_token'); // Get the token from localStorage
                const response = await fetch('http://localhost:8000/api/repubics/republics/', {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRepublics(data);
                setFilteredRepublics(data); // Initially, it displays all republics
            } catch (error) {
                console.log("Error: ", error);
            }
        };
        fetchRepublics();
    }, []);

    const handleSearch = (searchTerm) => {
        // Filters republics based on name
        const filtered = republics.filter(republic =>
            republic.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRepublics(filtered); // Updates the state with filtered republics
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
