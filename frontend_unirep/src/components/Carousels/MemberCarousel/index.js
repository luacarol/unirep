import styles from './style.module.css';
import MemberCard from '../../Cards/MemberCard/index';
import Button from '../../Button/index';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MemberCarousel = () => {
    const navigate = useNavigate();

    const handleMemberCard = () => {
        navigate('/members')
    }

    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <MemberCard onClick={handleMemberCard} />
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