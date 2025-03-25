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
  const [maxRent, setMaxRent] = useState(1000);
  const [maxMembers, setMaxMembers] = useState(15); // Novo estado para o filtro de membros

  const navigate = useNavigate();
  let notLoggedIn = false;

  useEffect(() => {
    setRepublics([
      {
        id: 1,
        name: "República Alpha",
        rent: 800,
        members: 3,
        city: "São Paulo",
        description: "Essa é a república Alpha, nós somos unidos e gostamos de organização",
      },
      {
        id: 2,
        name: "República Beta",
        rent: 650,
        members: 4,
        city: "Rio de Janeiro",
        description: "Essa é a república Beta, gostamos de uma boa festa para unir laços",
      },
      {
        id: 3,
        name: "República Gamma",
        rent: 900,
        members: 2,
        city: "Belo Horizonte",
        description: "Essa é a república Gamma, somos centrados nos estudos e gostamos de compartilhar conhecimentos",
      },
      {
        id: 4,
        name: "República Magma",
        rent: 765,
        members: 4,
        city: "Curitiba",
        description: "Essa é a república Magma, somos flexíveis uns com os outros e prezamos pela diversidade",
      },
    ]);
  }, []);

  // Filtra as repúblicas pelo nome, cidade, valor do aluguel e número de membros
  const filteredRepublics = republics.filter(
    (rep) =>
      (rep.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rep.city.toLowerCase().includes(searchQuery.toLowerCase())) &&
      rep.rent <= maxRent &&
      rep.members <= maxMembers
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
                  members={rep.members}
                  description={rep.description}
                  city={rep.city}
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
