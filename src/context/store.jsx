
import React, { createContext, useContext, useState } from "react";
import jollofImg from "../assets/images/jollof.jpg";
import egusiImg from "../assets/images/egusi.jpg";
import veggiesImg from "../assets/images/veggie.jpg";
import saladImg from "../assets/images/salad.jpg";
import spaghettiImg from "../assets/images/spaghetti.jpg";
import macImg from "../assets/images/mac.jpg";
import suyaImg from "../assets/images/suya.jpg";
import burgerImg from "../assets/images/burger.jpg";
import lambImg from "../assets/images/lamb.jpg";
import lambCurryImg from "../assets/images/lambcurry.jpg";
import cakeImg from "../assets/images/cake.jpg";
import iceCreamImg from "../assets/images/icecream.jpg";
import porkRibsImg from "../assets/images/porkribs.jpg";
import porkChopsImg from "../assets/images/porkchops.jpg";
import friedChickenImg from "../assets/images/friedchicken.jpg";
import grilledChickenImg from "../assets/images/grilledchicken.jpg";
import fishImg from "../assets/images/fish.jpg";
import shrimpImg from "../assets/images/shrimp.jpg";
import friesImg from "../assets/images/fries.jpg";
import croissantImg from "../assets/images/croissant.jpg";
import springRollsImg from "../assets/images/springrolls.jpg";
import wingsImg from "../assets/images/wings.jpg";
import plantainImg from "../assets/images/plantain.jpg";
import coleslawImg from "../assets/images/coleslaw.jpg";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [products] = useState([
    // Soup
    { id: 1, name: "Jollof Rice", desc: "With chicken & salad", price: 2500, img: jollofImg, category: "Soup" },
    { id: 2, name: "Egusi Soup", desc: "With pounded yam", price: 3000, img: egusiImg, category: "Soup" },

    // Vegetarian
    { id: 3, name: "Veggie Stir Fry", desc: "Mixed vegetables with sauce", price: 2000, img: veggiesImg, category: "Vegetarian" },
    { id: 4, name: "Salad Bowl", desc: "Fresh garden vegetables", price: 1500, img: saladImg, category: "Vegetarian" },

    // Pasta
    { id: 5, name: "Spaghetti Bolognese", desc: "Classic Italian pasta", price: 4000, img: spaghettiImg, category: "Pasta" },
    { id: 6, name: "Mac & Cheese", desc: "Creamy cheesy pasta", price: 3500, img: macImg, category: "Pasta" },

    // Beef
    { id: 7, name: "Beef Suya", desc: "Spicy grilled beef", price: 2500, img: suyaImg, category: "Beef" },
    { id: 8, name: "Beef Burger", desc: "Double beef with cheese", price: 3500, img: burgerImg, category: "Beef" },

    // Lamb
    { id: 9, name: "Lamb Chops", desc: "Grilled lamb with spices", price: 6000, img: lambImg, category: "Lamb" },
    { id: 10, name: "Lamb Curry", desc: "Spicy curry with lamb", price: 5500, img: lambCurryImg, category: "Lamb" },

    // Dessert
    { id: 11, name: "Chocolate Cake", desc: "Rich and moist", price: 2000, img: cakeImg, category: "Dessert" },
    { id: 12, name: "Ice Cream", desc: "2 scoops of vanilla & chocolate", price: 1500, img: iceCreamImg, category: "Dessert" },

    // Pork
    { id: 13, name: "Pork Ribs", desc: "BBQ glazed pork ribs", price: 5000, img: porkRibsImg, category: "Pork" },
    { id: 14, name: "Pork Chops", desc: "Juicy grilled pork chops", price: 4800, img: porkChopsImg, category: "Pork" },

    // Chicken
    { id: 15, name: "Fried Chicken", desc: "Crispy golden fried chicken", price: 3000, img: friedChickenImg, category: "Chicken" },
    { id: 16, name: "Grilled Chicken", desc: "Served with pepper sauce", price: 3200, img: grilledChickenImg, category: "Chicken" },

    // Seafood
    { id: 17, name: "Grilled Fish", desc: "Tilapia with spices", price: 4000, img: fishImg, category: "Seafood" },
    { id: 18, name: "Shrimp Pasta", desc: "Creamy pasta with shrimp", price: 4500, img: shrimpImg, category: "Seafood" },

    // French
    { id: 19, name: "French Fries", desc: "Golden & crispy", price: 1200, img: friesImg, category: "French" },
    { id: 20, name: "Croissant", desc: "Buttery French pastry", price: 1000, img: croissantImg, category: "French" },

    // Starter
    { id: 21, name: "Spring Rolls", desc: "Crispy veggie rolls", price: 1500, img: springRollsImg, category: "Starter" },
    { id: 22, name: "Chicken Wings", desc: "Spicy or BBQ wings", price: 2200, img: wingsImg, category: "Starter" },

    // Side
    { id: 23, name: "Plantain", desc: "Fried ripe plantain", price: 1000, img: plantainImg, category: "Side" },
    { id: 24, name: "Coleslaw", desc: "Creamy coleslaw salad", price: 800, img: coleslawImg, category: "Side" },
  ]);

  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState([]);

  // toggle favorite ❤️
  const toggleFav = (id) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev);
      newFavs.has(id) ? newFavs.delete(id) : newFavs.add(id);
      return newFavs;
    });
  };

  const addToCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      const product = products.find((p) => p.id === id);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(item.qty - 1, 0) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <StoreContext.Provider
      value={{
        products,
        favorites,
        toggleFav,
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
