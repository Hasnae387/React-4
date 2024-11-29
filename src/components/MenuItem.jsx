import React from 'react';
import '../styles/MenuItem.css';

const MenuItem = ({ name, description, price, image }) => {
    return (
      <div className='item'>
        <img className="item-image" src={image} alt={name}  />
        <h3 className='name'>{name}</h3>
        <p className='item-info'>{description}</p>
        <p className='item-price'><strong>Prix :</strong> {price} MAD</p>
      </div>
    );
};

export default MenuItem;
