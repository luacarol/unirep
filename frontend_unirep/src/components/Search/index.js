import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ id, placeholder, onChange }) => {
    return (
        <div id={id} className={styles.container}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon}/>

            <input className={`legend`} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default Search;