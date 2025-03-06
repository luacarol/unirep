import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
import ButtonIcon from "../../components/Buttons/ButtonIcon/ButtonIcon";

const EditProfile = () => {
  const { user } = useAuth(); // Pegando o usuário logado
  const navigate = useNavigate(); // Para redirecionar após salvar o perfil

  // Estado inicial com os dados do usuário (pode ser substituído por um fetch real)
  const [formData, setFormData] = useState({
    fullName: user ? user.full_name : "",
    age: user ? user.age : "",
    cpf: user ? user.cpf : "",
    whatsapp: user ? user.whatsapp : "",
    course: user ? user.university_course : "",
    hobby: user ? user.hobby : "",
    dislikes: user ? user.dislikes : "",
  });

  // Função para lidar com as mudanças nos inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para salvar as informações (aqui você pode fazer uma chamada para a API real)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode salvar as alterações, por exemplo, chamando uma função do contexto ou fazendo um fetch
    console.log(formData); // Para testar e ver as mudanças no console
    // Simular redirecionamento para a Home após salvar
    navigate("/");
  };

  return (
    <div className="edit-profile">
      <h2 className="title">✏️ Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="label-input">
          <label className="legend" htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="age">Idade</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="whatsapp">Whatsapp</label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="course">Curso</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="hobby">Hobbie Preferido</label>
          <input
            type="text"
            id="hobby"
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="dislikes">Eu Não Gosto de...</label>
          <input
            type="text"
            id="dislikes"
            name="dislikes"
            value={formData.dislikes}
            onChange={handleChange}
            required
          />
        </div>

        <ButtonIcon text="Salvar Alterações" />
      </form>
    </div>
  );
};

export default EditProfile;
