import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button';
import styles from './style.module.css';
import ItemToPayCard from '../../Cards/ItemToPayCard/index';

const ItemToPayCarousel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <ItemToPayCard/>
                <ItemToPayCard/>
                <ItemToPayCard/>
            </div>

            <div className={styles.buttons}>
                <Button variant='iconButton' icon={faChevronLeft} />
                <Button variant='iconButton' icon={faChevronRight} />
            </div>
        </div>
    )
}

export default ItemToPayCarousel;