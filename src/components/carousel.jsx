import React, { useState } from 'react';
import ArrowIcon from '../assets/img/white/arrow-up.svg';
import '../assets/caroussel.scss';

function Carousel({ logement }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { pictures, title, cover } = logement;

    const handlePrevClick = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex((prevIndex) => prevIndex - 1);
        } else {
            setCurrentImageIndex(pictures.length - 1);
        }
    };

    const handleNextClick = () => {
        if (currentImageIndex < pictures.length - 1) {
            setCurrentImageIndex((prevIndex) => prevIndex + 1);
        } else {
            setCurrentImageIndex(0);
        }
    };

    const renderNavigations = () => {
        if (pictures.length > 1) {
            return (
                <>
                    <button className="carousel-control prev" onClick={handlePrevClick}>
                        <img className="arrow-icon" src={ArrowIcon} alt="arrow" />
                    </button>
                    <button className="carousel-control next" onClick={handleNextClick}>
                        <img className="arrow-icon" src={ArrowIcon} alt="arrow" />
                    </button>
                </>
            );
        }
        return null;
    };

    const renderCarousel = () => {
        if (pictures.length > 1) {
            return (
                <div className="carousel-pagination">
                    {currentImageIndex + 1}/{pictures.length}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="carousel-container">
            {renderNavigations()}
            <img
                src={pictures[currentImageIndex] || cover}
                alt={title}
                className="carousel-image"
            />
            {renderCarousel()}
        </div>
    );
};

export default Carousel;
