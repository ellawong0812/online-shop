import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "./CartContext";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, count1, increaseCount1, decreaseCount1 } =
    useContext(CartContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // // Define a state variable count and a function setCount to keep track of the quantity of each item in the cart
  // const [count, setCount] = useState({});

  // useEffect(() => {
  //   // Retrieve count from local storage
  //   const savedCount = localStorage.getItem("count");
  //   if (savedCount) {
  //     const parsedCount = JSON.parse(savedCount);
  //     setCount(parsedCount);
  //   }
  // }, []);

  // const increaseCount = (itemId) => {
  //   //setCount (callback function) that receives the previous state (prevCount) as an argument.
  //   setCount((prevCount) => ({
  //     ...prevCount,
  //     [itemId]: (prevCount[itemId] || 1) + 1,
  //     //prevCount[itemId] retrieves the current count of the item. If it doesn't exist (i.e., it's undefined), it falls back to a default value of 1.
  //     //The retrieved count is then incremented by 1
  //   }));
  // };

  // const decreaseCount = (itemId) => {
  //   setCount((prevCount) => {
  //     const updatedCount = (prevCount[itemId] || 1) - 1;
  //     return {
  //       ...prevCount,
  //       [itemId]: updatedCount >= 1 ? updatedCount : 1,
  //     };
  //   });
  // };

  const handleCheckout = () => {
    setModalIsOpen(true);
  };

  const emptyCart = () => {
    setModalIsOpen(false);
    const confirmed = window.confirm("Are you sure you want to check out?");
    if (confirmed) {
      // Remove all instances of the item from the cart
      cartItems.forEach((item) => {
        for (let i = 0; i < ((1)[item.id] || 1); i++) {
          removeFromCart(item);
        }
      });
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const itemTotalPrice = (count1[item.id] || 1) * item.price;
      totalPrice += itemTotalPrice;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="outer">
      <div>
        <div className="title_box">
          <h1 className="title">Shopping Cart🛒</h1>
        </div>
        <ul className="cart_container">
          {cartItems.length === 0 ? (
            <li className="no_items">No items in the cart</li>
          ) : (
            cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart_product">
                  <div className="product_details">
                    <img src={item.photo} alt={item.name} className="image" />
                    <p className="description">
                      {item.name} - ${item.price}
                    </p>
                  </div>
                  <div className="quantity">
                    <p>Quantity:</p>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => increaseCount1(item.id)}
                    >
                      +
                    </Button>
                    <p>{count1[item.id] || 1}</p>

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => decreaseCount1(item.id)}
                    >
                      -
                    </Button>
                  </div>
                  <Button
                    className="remove"
                    variant="outline-danger"
                    onClick={() => {
                      for (let i = 0; i < (count1[item.id] || 1); i++) {
                        removeFromCart(item);
                      }
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      <div>
        <div className="checkout">
          <Button variant="outline-dark" onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
        <Modal isOpen={modalIsOpen}>
          <h2>Checkout</h2>
          <p>Total Price: ${getTotalPrice()}</p>
          <Button variant="primary" size="lg" onClick={emptyCart}>
            OK
          </Button>
          {"  "}
          <Button variant="secondary" size="lg" active onClick={closeModal}>
            Leave
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default ShoppingCart;
