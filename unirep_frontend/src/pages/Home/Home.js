import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import RepublicCard from "../../components/RepublicCard/RepublicCard";
import UserRepublic from "../../components/UserRepublic/UserRepublic";
import "./Home.css";
import EditProfileCard from "../../components/EditProfileCard/EditProfileCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();
  const [republics, setRepublics] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [maxRent, setMaxRent] = useState(3000);
  const [maxMembers, setMaxMembers] = useState(15); // Novo estado para o filtro de membros

  const navigate = useNavigate();
  let notLoggedIn = false;

  useEffect(() => {
    const fetchRepublics = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/republics/");
        const data = await response.json();
        console.log("Repúblicas recebidas:", data); // 👀 Verificar no console
        setRepublics(data);
      } catch (error) {
        console.error("Erro ao buscar repúblicas:", error);
      }
    };

    fetchRepublics();
  }, []);

  // Filtra as repúblicas pelo nome, cidade, valor do aluguel e número de membros
  const filteredRepublics = republics.filter(
    (rep) =>
      (rep.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rep.address.city.toLowerCase().includes(searchQuery.toLowerCase())) &&
      parseFloat(rep.rent) <= maxRent && // 🛠️ Convertendo corretamente para número decimal
      Number(rep.number_of_members) <= maxMembers
  );

  const handleRepublicCard = () => {
    if (notLoggedIn === true) {
      navigate("/login");
    } else {
      navigate("/republic-details");
    }
  };

  return (
    <div className="home">
      {user ? (
        <>
          <h2 className="title welcome-title">Home</h2>

          <div className="section">
            <h1 className="bigger-subtitle section-title">👤 Meu Perfil</h1>
            <EditProfileCard />
          </div>

          <div className="section">
            <h1 className="bigger-subtitle section-title">🏠 Minha Moradia</h1>
            <UserRepublic republic={user.republic} />
          </div>
        </>
      ) : (
        <>
          <h2 className="bigger-subtitle welcome-title">Bem-vindo(a) ao UniRep!</h2>
          <h1 className="title">🏠 Repúblicas Disponíveis</h1>

          <div className="filter-section">
            <h2 className="minor-subtitle">Filtre a sua República</h2>

            {/* Barra de pesquisa */}
            <div className="search-bar">
              <input
                type="text"
                placeholder="Pesquise por nome ou cidade"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filtro por aluguel */}
            <div className="filter-container filter-rent">
              <label className="legend" htmlFor="rent-slider">
                💰 Filtrar por aluguel (até R$ {maxRent})
              </label>
              <input
                id="rent-slider"
                type="range"
                min="500"
                max="1000"
                step="50"
                value={maxRent}
                onChange={(e) => setMaxRent(Number(e.target.value))}
              />
            </div>

            {/* Filtro por quantidade de membros */}
            <div className="filter-container">
              <label className="legend" htmlFor="members-slider">
                👥 Filtrar por membros (até {maxMembers})
              </label>
              <input
                id="members-slider"
                type="range"
                min="1"
                max="15"
                step="1"
                value={maxMembers}
                onChange={(e) => setMaxMembers(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Lista de repúblicas filtradas */}
          <div className="republics">
            {filteredRepublics.length > 0 ? (
              filteredRepublics.map((rep) => (
                <RepublicCard
                  key={rep.id}
                  name={rep.name}
                  rent={rep.rent}
                  members={rep.number_of_members}  // 🔄 Corrigido
                  description={rep.description}
                  city={rep.address.city} // 🔄 Corrigido
                  onClick={handleRepublicCard}
                />
              ))
            ) : (
              <p>Nenhuma república encontrada.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
