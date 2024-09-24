import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './NavInfo.module.css';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const NavInfo = ({ className, text, content }) => {
    return (
        <div className={`${className} ${style.container}`}>

            <div className={style.divider}>

                <label className={`section ${style.label}`}>{text}</label>

                <FontAwesomeIcon className={style.icon} icon={faCaretDown} />

            </div>

            <div className={style.content}>
                {content}
            </div>

        </div>
    )
}

export default NavInfo;