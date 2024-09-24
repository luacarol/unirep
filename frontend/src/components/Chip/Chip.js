import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Chip.module.css';

const Chip = ({ icon, text }) => {
    return (
        <div className={style.container}>
            <FontAwesomeIcon className={`${style.icon}`} icon={icon} />

            <label className={`${style.label}`}>{text}</label>
        </div>
    )
}

export default Chip;