import React, { useState } from 'react';

const Equipment = ({ equipments }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleEquipmentList = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className="equipment-container">
            <button onClick={toggleEquipmentList}>
                Équipements
            </button>
            {isExpanded && (
                <ul className="equipment-list">
                    {equipments.map((equipment) => (
                        <li key={equipment}>{equipment}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Equipment;