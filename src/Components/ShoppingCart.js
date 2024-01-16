import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "./CartContext";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [count, setCount] = useState({});

  const increaseCount = (itemId) => {
    setCount((prevCount) => ({
      ...prevCount,
      [itemId]: (prevCount[itemId] || 1) + 1,
    }));
  };

  const decreaseCount = (itemId) => {
    setCount((prevCount) => {
      const updatedCount = (prevCount[itemId] || 1) - 1;
      return {
        ...prevCount,
        [itemId]: updatedCount >= 1 ? updatedCount : 1,
      };
    });
  };

  const handleCheckout = () => {
    setModalIsOpen(true);
  };

  const emptyCart = () => {
    setModalIsOpen(false);
    const confirmed = window.confirm("Are you sure you want to check out?");
    if (confirmed) {
      // Remove all items from the cart
      cartItems.forEach((item) => removeFromCart(item));
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const itemTotalPrice = (count[item.id] || 1) * item.price;
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
                    <p className="description">
                      {item.name} - ${item.price}
                    </p>
                  </div>
                  <div className="quantity">
                    <p>Quantity:</p>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => increaseCount(item.id)}
                    >
                      +
                    </Button>
                    <p>{count[item.id] || 1}</p>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => decreaseCount(item.id)}
                    >
                      -
                    </Button>
                  </div>
                  <Button
                    className="remove"
                    variant="outline-danger"
                    onClick={() => removeFromCart(item)}
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
