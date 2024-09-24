import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './ButtonLabelIcon.module.css';

const ButtonLabelIcon = ({ id, className, text, icon, onClick }) => {
    return (
        <div id={id} className={`${className} ${style.container}`} onClick={onClick}>

            <FontAwesomeIcon className={style.icon} icon={icon}/>

            <label className={style.label}>{text}</label>

        </div>
    )
}

export default ButtonLabelIcon;