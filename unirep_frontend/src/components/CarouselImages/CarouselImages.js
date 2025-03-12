import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./CarouselImages.css"; // Certifique-se de que o CSS está sendo importado

const CarouselImages = ({ images }) => {
    const [index, setIndex] = useState(0);
    const visibleImages = 4;

    const nextSlide = () => {
        if (index + visibleImages < images.length) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className="carousel-container">
            <button className="carousel-btn left" onClick={prevSlide} disabled={index === 0}>
                <ChevronLeft size={24} />
            </button>
            <div className="carousel">
                {images.slice(index, index + visibleImages).map((img, i) => (
                    <img key={i} src={img} alt={`Imagem ${i + 1}`} className="carousel-img" />
                ))}
            </div>
            <button className="carousel-btn right" onClick={nextSlide} disabled={index + visibleImages >= images.length}>
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default CarouselImages;
