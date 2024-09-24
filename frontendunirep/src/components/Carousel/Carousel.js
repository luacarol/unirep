import React, { useState } from 'react';
import styles from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faUtensils, faCouch, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import Chip from '../Chip/Chip'; // Importa o componente Chip

// Array de imagens com seus respectivos ícones e textos para os Chips
const slidesData = [
    { image: "https://via.placeholder.com/400x300?text=Slide+1", icon: faUtensils, text: "Cozinha" },
    { image: "https://via.placeholder.com/400x300?text=Slide+2", icon: faCouch, text: "Sala de Estar" },
    { image: "https://via.placeholder.com/400x300?text=Slide+3", icon: faBed, text: "Quarto" },
    { image: "https://via.placeholder.com/400x300?text=Slide+4", icon: faBath, text: "Banheiro" },
    { image: "https://via.placeholder.com/400x300?text=Slide+5", icon: faCouch, text: "Sala de Jantar" },
    { image: "https://via.placeholder.com/400x300?text=Slide+6", icon: faBed, text: "Suíte" },
    { image: "https://via.placeholder.com/400x300?text=Slide+7", icon: faUtensils, text: "Copa" },
    { image: "https://via.placeholder.com/400x300?text=Slide+8", icon: faCouch, text: "Sala de TV" }
];

const Carousel = ({ slidesToShow = 4 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + slidesToShow >= slidesData.length ? 0 : prevIndex + slidesToShow
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slidesData.length - slidesToShow : prevIndex - slidesToShow
        );
    };

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.slideWrapper}>
                <div
                    className={styles.slides}
                    style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
                >
                    {slidesData.map((slide, index) => (
                        <div className={styles.slide} key={index} style={{ width: `calc(100% / ${slidesToShow})` }}>
                            <div className={styles.imageWrapper}>
                                <img src={slide.image} alt={`Slide ${index + 1}`} />
                                <div className={styles.chipWrapper}>
                                    <Chip icon={slide.icon} text={slide.text} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.buttonsContainer}>
                <FontAwesomeIcon className={styles.prevButton} onClick={prevSlide} icon={faChevronLeft} />
                <FontAwesomeIcon className={styles.nextButton} onClick={nextSlide} icon={faChevronRight} />
            </div>
        </div>
    );
};

export default Carousel;
