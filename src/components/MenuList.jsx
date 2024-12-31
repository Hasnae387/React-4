import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "./MenuItem";
import "../styles/MenuList.css";
import { ShoppingCart } from "@mui/icons-material"; 
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const [panier, setPanier] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false); 
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    search: "",
  });


  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/menu");
        setMenu(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };
    fetchMenu();
  }, []);

 
  const AjoutPanier = (item) => {
    setPanier((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

 
  const SpprimerDuPanier = (item) => {
    setPanier((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem?.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.name !== item.name);
      }
    });
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  //  filtres
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: name === "search" ? value.toLowerCase() : value,
    }));
  };

  
  const filteredMenu = menu
    .filter((category) =>
      !filters.category || category.category === filters.category
    )
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          (!filters.price || item.price <= filters.price) &&
          (!filters.search ||
            item.name.toLowerCase().includes(filters.search) ||
            item.description.toLowerCase().includes(filters.search))
      ),
    }));

  return (
    <div>
      <p className="explore">Explorez notre Menu</p>

  
      <div className="cart-icon" onClick={handleDialogOpen}>
        <ShoppingCart />
      </div>

     
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Commande</DialogTitle>
        <DialogContent>
          {panier.length === 0 ? (
            <p> Commande est vide</p>
          ) : (
            <ul>
              {panier.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.quantity} x {item.price} MAD
                </li>
              ))
             
            }
            </ul>
            
          )}
           <p>
              Total :{" "}
              {panier.reduce((total, item) => total + item.price * item.quantity, 0)}{" "}
              MAD
            </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} >
            Fermer
          </Button>
          <Button >Passer la commande</Button>
        </DialogActions>
      </Dialog>

 
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

        <div id="divSearch" className="filter-icon">
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

     
      <div className="menu-list">
        {filteredMenu.map((category, index) => (
          <div key={index}>
            <h2 className="category-item">{category.category}</h2>
            <div className="display-list">
              {category.items.map((item, itemIndex) => (
                <MenuItem
                  key={itemIndex}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={`http://localhost:5000${item.image}`}
                  onAdd={AjoutPanier}
                  onRemove={SpprimerDuPanier}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
