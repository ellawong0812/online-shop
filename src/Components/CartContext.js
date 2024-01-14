import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
