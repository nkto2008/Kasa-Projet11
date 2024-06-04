import React from 'react';

const Host = ({ host }) => {
    return (
        <div className="host-container">
            <div className="host-name">{host.name}</div>
            <img src={host.picture} alt={host.name} className="host-picture" />
        </div>
    );
};

export default Host;