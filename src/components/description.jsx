import React, { useState } from 'react';

const Description = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className="description-container">
            <button onClick={toggleDescription}>
                Description
            </button>
            {isExpanded && <p className="description-text">{description}</p>}
        </div>
    );
};

export default Description;