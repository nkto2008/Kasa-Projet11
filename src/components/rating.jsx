import React from 'react';
import starFull from '../assets/img/color/star_full.svg';
import starEmpty from '../assets/img/color/star_empty.svg';

const ratingStars = (rating) => {
    const totalStars = 5;
    const fullStars = parseInt(rating);
    const emptyStars = totalStars - fullStars;

    return (
        <>
            {Array.from({ length: fullStars }, (_, i) => (
                <img src={starFull} alt="Full Star" key={`full-${i}`} />
            ))}
            {Array.from({ length: emptyStars }, (_, i) => (
                <img src={starEmpty} alt="Empty Star" key={`empty-${i}`} />
            ))}
        </>
    );
};

export default ratingStars;