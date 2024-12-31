import React, { useState } from "react";
import "../styles/MenuItem.css";
import { Add, Remove } from "@mui/icons-material"; 

const MenuItem = ({ name, description, price, image, onAdd, onRemove }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    onAdd({ name, description, price, quantity: quantity + 1 });
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onRemove({ name, description, price, quantity: quantity - 1 });
    }
  };

  return (
    <div className="item">
      <img className="item-image" src={image} alt={name} />
      <h3 className="name">{name}</h3>
      <p className="item-info">{description}</p>
      <p className="item-price">
        <strong>Prix :</strong> {price} MAD
      </p>

   
      <div className="item-actions">
      <button className="action-button" onClick={handleRemove} data-testid="remove-button">
  <Remove />
</button>
<button className="action-button" onClick={handleAdd} data-testid="add-button">
  <Add />
</button>

      </div>
    </div>
  );
};

export default MenuItem;
