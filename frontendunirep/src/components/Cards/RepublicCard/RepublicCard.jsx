import ButtonIcon from '../../Buttons/ButtonIcon/ButtonIcon';
import Chip from '../../Chip/Chip';
import style from './RepublicCard.module.css';
import { faHeart, faHouse, faTransgender } from '@fortawesome/free-solid-svg-icons';

const RepublicCard = ({ republic, onClick }) => {
    return (
        <div className={style.container} onClick={onClick}>

            <div className={style.imgSection}>
            </div>

            <div className={style.infoSection}>
                <label className={`${style.valueLabel}`}>R$ 400,00</label>

                <div className={style.republicInfo}>
                    <h2 className={`subtitle ${style.republicName}`}>{republic.name}</h2>

                    <label className={`${style.republicInfoLabel}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</label>

                </div>

                <div className={style.additional}>
                    <div className={style.chips}>
                        <Chip icon={faHouse} text="Casa" />
                        <Chip icon={faTransgender} text="Mista" />
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