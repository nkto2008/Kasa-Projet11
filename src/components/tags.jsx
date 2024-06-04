import React from 'react';

const Tags = ({ tags }) => {
    return (
        <div className="tags-container">
            {tags.map((tag) => (
                <span key={tag} className="tag">
                    {tag + " "}
                </span>
              
            ))}
        </div>
    );
};

export default Tags;