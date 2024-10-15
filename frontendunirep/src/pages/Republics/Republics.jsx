import axios from 'axios';
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import styles from './Republics.module.css';
import RepublicCard from '../../components/Cards/RepublicCard/RepublicCard';
import NoData from '../../components/NoData/NoData';
import { useEffect, useState } from "react";

const Republics = () => {
    const [republics, setRepublics] = useState([]);
    const [filteredRepublics, setFilteredRepublics] = useState([]);

    useEffect(() => {
        const fetchRepublics = async () => {
            try {
                let token = localStorage.getItem('access_token');
                
                const response = await fetch('http://localhost:8000/api/repubics/republics/', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
        
                if (response.status === 401) { // Unauthorized
                    const refreshToken = localStorage.getItem('refresh_token');
                    const refreshResponse = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
                        refresh: refreshToken,
                    });
        
                    // Atualize o token de acesso
                    token = refreshResponse.data.access;
                    localStorage.setItem('access_token', token);
        
                    // Tente novamente buscar as repúblicas
                    const retryResponse = await fetch('http://localhost:8000/api/repubics/republics/', {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });
        
                    if (!retryResponse.ok) {
                        throw new Error('Network response was not ok');
                    }
        
                    const data = await retryResponse.json();
                    setRepublics(data);
                    setFilteredRepublics(data);
                } else if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    const data = await response.json();
                    setRepublics(data);
                    setFilteredRepublics(data);
                }
            } catch (error) {
                console.log("Error: ", error);
            }
        };
        fetchRepublics();
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = republics.filter(republic =>
            republic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            republic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            republic.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            republic.neighborhood.toLowerCase().includes(searchTerm.toLowerCase()) ||
            republic.value.toString().includes(searchTerm)
        );
        setFilteredRepublics(filtered);
    };

    const handleFilter = (filters) => {
        const { housingType, communityType, priceRange } = filters;

        const filtered = republics.filter(republic => {

            const matchesHousingType = housingType.length === 0 || housingType.includes(republic.housing_type.toLowerCase());
            const matchesCommunityType = communityType.length === 0 || communityType.includes(republic.community_type.toLowerCase());
            const matchesPrice = republic.value <= priceRange;

            return matchesHousingType && matchesPrice && matchesCommunityType
        });

        setFilteredRepublics(filtered);
    };

    return (
        <Layout content={
            <div className={styles.container}>
                <h1 className={`title`}>Repúblicas</h1>
                <Search className={styles.search} onSearch={handleSearch} onFilter={handleFilter} />
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
