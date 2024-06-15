import React, { useState } from 'react';
import ArrowIcon from '../assets/img/white/arrow-up.svg';
import '../assets/caroussel.scss';

function Carousel({ logement }){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex((prevIndex) => prevIndex - 1);
        } else {
            setCurrentImageIndex(logement.pictures.length - 1);
        }
    };

    const handleNextClick = () => {
        if (currentImageIndex < logement.pictures.length - 1) {
            setCurrentImageIndex((prevIndex) => prevIndex + 1);
        } else {
            setCurrentImageIndex(0);
        }
    };

    return (
        <div className="carousel-container">
            <button className="carousel-control prev" onClick={handlePrevClick}>
                <img className="arrow-icon" src={ArrowIcon} alt="arrow" />
            </button>
            <img
                src={logement.pictures[currentImageIndex] || logement.cover}
                alt={logement.title}
                className="carousel-image"
            />
            <button className="carousel-control next" onClick={handleNextClick}>
                <img className="arrow-icon" src={ArrowIcon} alt="arrow" />
            </button>
        </div>
    );
};

export default Carousel;