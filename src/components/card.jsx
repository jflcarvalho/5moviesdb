import React from 'react';
import '../styles/Card.css';

const Card = ({ image, title, year, addFavorite, isFavorite }) => {
  return (
    <div className='mCard shadow'>
      <div className="img-wrapper">
        <div>
          <img src={image} alt={title} />
        </div>
      </div>

      <div className='info'>
        <span className='title'>{title}</span>
        <span className='year'>{year}</span>
      </div>
    </div>
  );
};

export default Card;