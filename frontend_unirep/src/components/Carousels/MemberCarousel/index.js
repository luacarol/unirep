import styles from './style.module.css';
import MemberCard from '../../Cards/MemberCard/index';
import Button from '../../Button/index';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MemberCarousel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
            
            <div className={styles.buttons}>
                <Button variant='iconButton' icon={faChevronLeft} />
                <Button variant='iconButton' icon={faChevronRight} />
            </div>
        </div>
    )
}

export default MemberCarousel;