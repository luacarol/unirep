import style from './Search.module.css';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';
import { useState } from 'react';
import RepublicSearchModal from '../Modals/RepublicSearchModal/RepublicSearchModal';

const Search = ({ className, onSearch, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isRepublicSearchModalOpen, setIsRepublicSearchModalOpen] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    const handleFilterClick = () => {
        setIsRepublicSearchModalOpen(prevState => !prevState);
    };

    const closeModal = () => {
        setIsRepublicSearchModalOpen(false);
    };

    return (
        <div className={`${className} ${style.container}`}>
            <div className={style.inputSection}>
                <input
                    type='text'
                    placeholder='Pesquise por uma república'
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <ButtonIcon
                className={style.filterButtonIcon}
                icon={faSliders}
                onlyIcon={false}
                onClick={handleFilterClick}
            />

            {isRepublicSearchModalOpen && (
                <RepublicSearchModal onClose={closeModal} onFilter={onFilter} />
            )}
        </div>
    );
};

export default Search;
