import React, { useState } from 'react';
import { menu } from "../assets/assets";
import MenuItem from "./MenuItem";
import "../styles/MenuList.css";

const MenuList = () => {
  //une seule etat pour les 3 filtres à fin d'éviter la répétition du code 
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    search: '',
  });
// en fonction des entrées d user 
//L'etat fait la mise à jour
//Sensible à la casse
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: name === 'search' ? value.toLowerCase() : value,
    }));
  };

  const filteredMenu = menu
    .filter(category =>
      !filters.category || category.category === filters.category
    )
    .map(category => ({
      ...category,
      items: category.items.filter(
        item =>(!filters.price || item.price <= filters.price)      &&
        (!filters.search || item.name.toLowerCase().includes(filters.search) ||
          item.description.toLowerCase().includes(filters.search)
        )
      )
    }))
  ;

  return (
    <div>
      <p className='explore'>Explore our Menu</p>
      <div className="filters">
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        >
          <option value="">Toutes les catégories</option>
          {menu.map((category, index) => (
            <option key={index} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>

        <div className="filter-icon">
          <i className="fas fa-dollar-sign"></i>
          <input
            type="number"
            name="price"
            placeholder="Prix"
            value={filters.price}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-icon">
          <i className="fas fa-search"></i>
          <input
            type="text"
            name="search"
            placeholder="Rechercher"
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>
      </div>


      {filteredMenu.map((category, index) => (
        <div key={index}>
          <h2 className='category-item'>{category.category}</h2>
          <div className='display-list'>
            {category.items.map((item, itemIndex) => (
              <MenuItem
                key={itemIndex}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
