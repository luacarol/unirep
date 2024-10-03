import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import headerLogoImg from '../../assets/images/header-logo.png';
import userImg from '../../assets/images/user.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPencil, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Layout = ({ content }) => {
    const navigate = useNavigate();
    const location = useLocation(); // Pega a rota atual

    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen); // Alterna o estado do modal
    };

    // Retrieves user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user_data'));
    const username = userData ? userData.username : 'Usuário';

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <img src={headerLogoImg} alt="Logo do Unirep" />

                <div className={styles.usernameAndUserPhoto} onClick={toggleModal}>
                    <label>{username}</label>
                    <img className={styles.userImg} src={userImg} alt="Foto do Usuário" />
                </div>

                {/* Modal que aparece ao clicar */}
                {isModalOpen && (
                    <div className={styles.modal}>
                        <ul>
                            <li onClick={() => navigate('/editprofile')}>
                                <FontAwesomeIcon className={styles.icon} icon={faPencil} />
                                Editar Perfil
                            </li>
                            <li onClick={() => navigate('/')}>
                                <FontAwesomeIcon className={styles.icon} icon={faRightFromBracket} />
                                Sair
                            </li>
                        </ul>
                    </div>
                )}
            </header>

            <aside className={styles.sidebar}>
                {/* Adicionando classe 'active' condicionalmente para a rota de Repúblicas */}
                <div className={`${styles.item} ${location.pathname.startsWith('/republics') ? styles.active : ''}`} onClick={() => navigate('/republics')}>
                    <FontAwesomeIcon icon={faHouse} />
                    <label>Repúblicas</label>
                </div>

                {/* Adicionando classe 'active' condicionalmente para a rota de Configurações */}
                {/* <div className={`${styles.item} ${location.pathname === '/settings' ? styles.active : ''}`} onClick={() => navigate('/settings')}>
                    <FontAwesomeIcon icon={faGear} />
                    <label>Configurações</label>
                </div> */}

                {/* Adicionando classe 'active' condicionalmente para a rota de Ajuda */}
                {/* <div className={`${styles.item} ${location.pathname === '/help' ? styles.active : ''}`}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <label>Ajuda</label>
                </div> */}
            </aside>

            <main className={styles.main}>
                {content}
            </main>

            <footer className={styles.footer}>
                Feito por Luana Anjos
            </footer>
        </div>
    );
};

export default Layout;
