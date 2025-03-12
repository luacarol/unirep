import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import RepublicCard from "../../components/RepublicCard/RepublicCard";
import UserRepublic from "../../components/UserRepublic/UserRepublic";
import './Home.css';
import EditProfileCard from "../../components/EditProfileCard/EditProfileCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useAuth(); // Pega os dados do usuário logado
  const [republics, setRepublics] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para controlar a pesquisa

  const navigate = useNavigate();

  let notLoggedIn = false;

  // Simulação de dados de repúblicas (pode ser substituído por um fetch na API)
  useEffect(() => {
    setRepublics([
      { id: 1, name: "República Alpha", rent: 800, members: 3, description: "Essa é a república Alpha, nós somos unidos e gostamos de organização" },
      { id: 2, name: "República Beta", rent: 650, members: 4, description: "Essa é a república Beta, gostamos de uma boa festa para unir laços" },
      { id: 3, name: "República Gamma", rent: 900, members: 2, description: "Essa é a república Gamma, somos centrados nos estudos e gostamos de compartilhar estudos" },
      { id: 4, name: "República Magma", rent: 765, members: 4, description: "Essa é a república Magma, somos flexíveis uns com os outros, prezados pela diversidade" },
    ]);
  }, []);

  // Filtra as repúblicas com base no texto da pesquisa
  const filteredRepublics = republics.filter(rep =>
    rep.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRepublicCard = () => {
    if (notLoggedIn == true) {
      navigate("/login");
    } else {
      navigate("/republic-details")
    }
  }

  return (
    <div className="home">
      {/* Se o usuário estiver logado, exibe a república que ele está alocado */}
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

          <div className="search-bar">
            <input
              type="text"
              placeholder="Pesquise por nome de república"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="republics">
            {filteredRepublics.length > 0 ? (
              filteredRepublics.map((rep) => (
                <RepublicCard
                  key={rep.id}
                  name={rep.name}
                  rent={rep.rent}
                  members={rep.members}
                  description={rep.description}
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
