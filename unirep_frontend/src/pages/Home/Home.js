import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom"; // Importando Link
import RepublicCard from "../../components/RepublicCard/RepublicCard";
import UserRepublic from "../../components/UserRepublic/UserRepublic";

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
    <div>
      {/* Se o usuário estiver logado, exibe a república que ele está alocado */}
      {user ? (
        <>
          <UserRepublic republic={user.republic} />
          <Link to="/edit-profile">Editar Perfil</Link> {/* Link para a página de edição */}
        </>
      ) : (
        <>
          <h2>Bem-vindo(a) ao UniRep!</h2>
          <h1>🏠 Repúblicas Disponíveis</h1>
          <div style={styles.grid}>
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

// Estilos inline para o grid
const styles = {
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  },
};

export default Home;
