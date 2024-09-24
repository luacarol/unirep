import style from './ButtonIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonIcon = ({ className, icon, onlyIcon, onClick }) => {
    let content;

    if (onlyIcon === true) {
        content = (
            <button className={`${className} ${style.buttonIcon}`} onClick={onClick}>
                <FontAwesomeIcon icon={icon} />
            </button>
        )
    } else {
        content = (
            <div className={`${className} ${style.withBg}`} onClick={onClick}>
                <button className={`${style.buttonIcon}`}>
                    <FontAwesomeIcon icon={icon} />
                </button>
            </div>
        )
    }

    return (
        content
    )
}

export default ButtonIcon;
