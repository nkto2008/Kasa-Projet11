import React, { useState } from 'react';

const Carousel = ({ logement }) => {
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
            <img
                src={logement.pictures[currentImageIndex] || logement.cover}
                alt={logement.title}
                className="carousel-image"
            />
            <div className="carousel-controls">
                <button onClick={handlePrevClick}>Précédent</button>
                <button onClick={handleNextClick}>Suivant</button>
            </div>
        </div>
    );
};

export default Carousel;