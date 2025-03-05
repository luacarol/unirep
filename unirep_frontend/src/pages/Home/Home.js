import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import RepublicCard from "../../components/RepublicCard/RepublicCard";
import UserRepublic from "../../components/UserRepublic/UserRepublic";
import './Home.css';
import EditProfileCard from "../../components/EditProfileCard/EditProfileCard";

const Home = () => {
  const { user } = useAuth(); // Pega os dados do usuário logado
  const [republics, setRepublics] = useState([]);

  // Simulação de dados de repúblicas (pode ser substituído por um fetch na API)
  useEffect(() => {
    setRepublics([
      { id: 1, name: "República Alpha", rent: 800, members: 3 },
      { id: 2, name: "República Beta", rent: 650, members: 4 },
      { id: 3, name: "República Gamma", rent: 900, members: 2 },
    ]);
  }, []);

  return (
    <div className="home">
      {/* Se o usuário estiver logado, exibe a república que ele está alocado */}
      {user ? (
        <>
          <h2 className="bigger-subtitle welcome-title">Home</h2>

          <h1 className="title section-title">👤 Meu Perfil</h1>

          <EditProfileCard/>
          {/* <UserRepublic republic={user.republic} />
          <Link to="/edit-profile">Editar Perfil</Link>
          <br />
          <Link to="/bills">Ver Itens à Pagar</Link> */}
        </>
      ) : (
        <>
          <h2 className="bigger-subtitle welcome-title">Bem-vindo(a) ao UniRep!</h2>
          <h1 className="title">🏠 Repúblicas Disponíveis</h1>
          <div className="republics">
            {republics.map((rep) => (
              <RepublicCard
                key={rep.id}
                name={rep.name}
                rent={rep.rent}
                members={rep.members}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
