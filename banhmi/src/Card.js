import React from 'react';

const Card = ({ image, title, alt, description }) => {
    return (
        <div className="card">
            <img src={image} alt={alt} />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Card;