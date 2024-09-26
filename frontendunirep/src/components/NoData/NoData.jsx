import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './NoData.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NoData = () => {
    return (
        <div className={styles.container}>
            <label className={`subtitle`}>Sem resultados</label>
            <FontAwesomeIcon icon={faTriangleExclamation} />
        </div>
    )
}

export default NoData;