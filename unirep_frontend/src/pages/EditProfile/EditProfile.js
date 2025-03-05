import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const { user, setUser } = useAuth(); // Pegando o usuário logado e a função para atualizar o estado
  const [formData, setFormData] = useState({
    hobby: user?.hobby || "",
    sociable: user?.sociable || false,
    likesCooking: user?.likesCooking || false,
    likesCleaning: user?.likesCleaning || false,
  });
  const navigate = useNavigate(); // Para redirecionar após salvar

  // Atualiza os dados do formulário conforme o estado do usuário
  useEffect(() => {
    if (user) {
      setFormData({
        hobby: user.hobby || "",
        sociable: user.sociable || false,
        likesCooking: user.likesCooking || false,
        likesCleaning: user.likesCleaning || false,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, ...formData }; // Atualizando o usuário com as novas informações
    setUser(updatedUser); // Atualizando o estado no contexto
    navigate("/"); // Redireciona para a Home após salvar
  };

  return (
    <div>
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Hobby:</label>
          <input
            type="text"
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
            placeholder="Seu hobby"
          />
        </div>

        <div>
          <label>Você é sociável?</label>
          <input
            type="checkbox"
            name="sociable"
            checked={formData.sociable}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Você gosta de cozinhar?</label>
          <input
            type="checkbox"
            name="likesCooking"
            checked={formData.likesCooking}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Você gosta de limpar a casa?</label>
          <input
            type="checkbox"
            name="likesCleaning"
            checked={formData.likesCleaning}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditProfile;
