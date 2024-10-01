import { faVenus } from '@fortawesome/free-solid-svg-icons';
import styles from './MemberCard.module.css';
import Chip from '../../Chip/Chip';
import { useEffect, useState } from 'react';

const MemberCard = ({ memberID, onClick }) => {
    const [member, setMember] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/users/users/${memberID}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log("data ", data)
                setMember(data)

            } catch (error) {
                console.log("Error: ", error)
            }
        };

        fetchUser();
    }, [memberID]);

    return (
        <div className={styles.container} onClick={onClick}>

            <div className={styles.imgSection}>
            </div>

            <div className={styles.infoSection}>
                <label className={`${styles.valueLabel}`}>{member.phone_number}</label>

                <div className={styles.memberInfo}>
                    <h2 className={`subtitle ${styles.membeName}`}>{member.full_name}</h2>

                    <label className={`${styles.membeInfoLabel}`}>Tenho {member.age} anos.</label>
                    {member.university_course && <label className={`${styles.membeInfoLabel}`}>Sou estudante de {member.university_course}.</label>}

                </div>

                <div className={styles.additional}>
                    <div className={styles.chips}>
                        {member.gender === 'M' && <Chip icon={faVenus} text="Masculino" />}
                        {member.gender === 'F' && <Chip icon={faVenus} text="Feminino" />}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MemberCard;