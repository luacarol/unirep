import style from './Search.module.css';
import { faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';
import { useState } from 'react';
import RepublicSearchModal from '../Modals/RepublicSearchModal/RepublicSearchModal';

const Search = ({ className }) => {
    const [isRepublicSearchModalOpen, setIsRepublicSearchModalOpen] = useState(false);

    const handleSearch = () => {
        setIsRepublicSearchModalOpen(prevState => !prevState);
    };

    const closeModal = () => {
        setIsRepublicSearchModalOpen(false);
    };

    return (
        <div className={`${className} ${style.container}`}>

            <div className={style.inputSection}>
                <input type='text' placeholder='Pesquise por uma república' />
            </div>

            <ButtonIcon
                className={style.searchButtonIcon}
                icon={faMagnifyingGlass}
                onlyIcon={false}
            />

            <ButtonIcon
                className={style.filterButtonIcon}
                icon={faSliders}
                onlyIcon={false}
                onClick={handleSearch}
            />

            {isRepublicSearchModalOpen && (
                <RepublicSearchModal onClose={closeModal} />
            )}

        </div>
    );
};

export default Search;
