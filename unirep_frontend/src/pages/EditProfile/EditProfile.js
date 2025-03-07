import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
import ButtonIcon from "../../components/Buttons/ButtonIcon/ButtonIcon";
import defaultProfileImage from "../../assets/images/user.svg"; // Imagem padrão
import { useToast } from "../../components/Toast/ToastContainer";

const EditProfile = () => {
  const { user } = useAuth(); // Pegando o usuário logado
  const navigate = useNavigate(); // Para redirecionar após salvar o perfil
  const { addToast } = useToast();

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    fullName: user ? user.full_name : "",
    age: user ? user.age : "",
    cpf: user ? user.cpf : "",
    whatsapp: user ? user.whatsapp : "",
    course: user ? user.university_course : "",
    hobby: user ? user.hobby : "",
    dislikes: user ? user.dislikes : "",
  });

  // Estado para armazenar a imagem de perfil
  const [profileImage, setProfileImage] = useState(user?.profileImage || defaultProfileImage);

  // Função para lidar com mudanças nos inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para lidar com a mudança de imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      addToast("Imagem alterada com sucesso!", "success");
    } else {
      addToast("Nenhuma imagem selecionada.", "warning");
    }
  };

  // Função para salvar as informações (substituir por chamada para API real)
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      // Exibe um toast de sucesso
      addToast("Perfil atualizado com sucesso!", "success");

      // Redireciona para a página inicial
      navigate("/");
    } catch (error) {
      // Exibe um toast de erro caso ocorra alguma falha
      addToast("Erro ao atualizar perfil. Tente novamente.", "error");
    }
  };

  return (
    <div className="edit-profile">
      <h2 className="title">✏️ Editar Perfil</h2>
      <form onSubmit={handleSubmit}>

        {/* Seção da imagem do perfil */}
        <div className="profile-picture">
          <img src={profileImage} alt="Foto de perfil" className="profile-img" />
          <input type="file" id="fileInput" accept="image/*" onChange={handleImageChange} />

          <label htmlFor="fileInput" className="upload-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <label htmlFor="fileInput" className="text-commom">Mudar foto</label>
          </label>
        </div>

        {/* Inputs do formulário */}
        <div className="label-input">
          <label className="legend" htmlFor="fullName">Nome Completo</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="age">Idade</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="whatsapp">Whatsapp</label>
          <input type="text" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="course">Curso</label>
          <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="hobby">Hobbie Preferido</label>
          <input type="text" id="hobby" name="hobby" value={formData.hobby} onChange={handleChange} required />
        </div>

        <div className="label-input">
          <label className="legend" htmlFor="dislikes">Eu Não Gosto de...</label>
          <input type="text" id="dislikes" name="dislikes" value={formData.dislikes} onChange={handleChange} required />
        </div>

        <ButtonIcon text="Salvar Alterações" iconClass="fa-solid fa-floppy-disk" />
      </form>
    </div>
  );
};

export default EditProfile;