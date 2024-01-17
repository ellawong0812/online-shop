import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const [count1, setCount1] = useState({});

  const increaseCount1 = (itemId) => {
    //setCount (callback function) that receives the previous state (prevCount) as an argument.
    setCount1((prevCount) => ({
      ...prevCount,
      [itemId]: (prevCount[itemId] || 1) + 1,
      //prevCount[itemId] retrieves the current count of the item. If it doesn't exist (i.e., it's undefined), it falls back to a default value of 1.
      //The retrieved count is then incremented by 1
    }));
  };

  const decreaseCount1 = (itemId) => {
    setCount1((prevCount) => {
      const updatedCount = (prevCount[itemId] || 1) - 1;
      return {
        ...prevCount,
        [itemId]: updatedCount >= 1 ? updatedCount : 1,
      };
    });
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
    setCount1((prevCount) => ({
      ...prevCount,
      [item.id]: 1,
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        count1,
        increaseCount1,
        decreaseCount1,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
