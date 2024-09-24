import NavSidebar from './NavSidebar/NavSidebar';
import style from './Sidebar.module.css';
import { faCircleInfo, faHeart, faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleRepublics = () => {
        navigate('/republics');
    } 

    const handleFavorites = () => {
        navigate('/favorites');
    }

    return (
        <div className={style.container}>

            <div className={style.content}>
                <NavSidebar icon={faPeopleRoof} text="Repúblicas" isPrincipal={true} onClick={handleRepublics} />
                <NavSidebar icon={faHeart} text="Favoritos" isPrincipal={false} onClick={handleFavorites} />
            </div>

            <NavSidebar icon={faCircleInfo} text="Ajuda" isPrincipal={true} />

        </div>
    )
}

export default Sidebar;