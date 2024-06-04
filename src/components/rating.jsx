import React from 'react';

const Rating = ({ rating }) => {
    //Calculer le nombre d'étoile pleine
    const fullStars = Math.floor(rating);
    console.log(fullStars)

    // Vérifier s'il y a un nombre d'étoile décimale
    const hasHalfStar = rating % 1 !== 0;

    //Calculer le nombre d'étoile vide
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    console.log(emptyStars)

    return (
        <div className="rating-container">
            {/* étoile pleine */}
            {Array(fullStars).fill('★').map((star, index) => (
                <span key={index} className="rating-star">
                    {star}
                </span>
            ))}

            {/* moitié étoile */}
            {hasHalfStar && (
                <span key="half" className="rating-star">
                    ½
                </span>
            )}

            {/* étoile vide */}
            {Array(emptyStars).fill('☆').map((star, index) => (
                <span key={index} className="rating-star">
                    {star}
                </span>
            ))}
        </div>
    );
};

export default Rating;