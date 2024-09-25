import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';
import Chip from '../../Chip/Chip';
import style from './RepublicCard.module.css';
import { faHeart, faHouse, faTransgender } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const RepublicCard = ({ republic }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/republics/${republic.id}`); // Navega para a página de detalhes da república
    };

    return (
        <div className={style.container} onClick={handleClick}>

            <div className={style.imgSection}>
            </div>

            <div className={style.infoSection}>
                <label className={`${style.valueLabel}`}>R$ {republic.value}</label>

                <div className={style.republicInfo}>
                    <h2 className={`subtitle ${style.republicName}`}>{republic.name}</h2>

                    <label className={`${style.republicInfoLabel}`}>{republic.description}</label>

                </div>

                <div className={style.additional}>
                    <div className={style.chips}>
                        <Chip icon={faHouse} text={republic.housing_type} />
                        <Chip icon={faTransgender} text={republic.community_type} />
                    </div>

                    <div>
                        <ButtonIcon className={style.heartIcon} icon={faHeart} onlyIcon={true} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RepublicCard;