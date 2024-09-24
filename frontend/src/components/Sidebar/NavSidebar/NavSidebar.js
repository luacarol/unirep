import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './NavSidebar.module.css';

const NavSidebar = ({ icon, text, isPrincipal, onClick }) => {
    let content;

    if (isPrincipal === true) {
        content = (
            <div onClick={onClick} className={style.container}>
                <FontAwesomeIcon icon={icon} className={style.iconPrincipal} />
                <label className={`section ${style.labelPrincipal}`}>{text}</label>
            </div>
        )
    } else {
        content = (
            <div onClick={onClick} className={style.container}>
                <FontAwesomeIcon icon={icon} className={style.icon} />
                <label className={`section ${style.label}`}>{text}</label>
            </div>
        )
    }

    return (
        content
    )
}

export default NavSidebar;