import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import header from "../Assets/header.jpg";
import "./HomePage.css";
import small_toy from "../Assets/small_toy.jpg";
import kuma_cake from "../Assets/kuma_cake.jpg";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const { addToCart, count1, increaseCount1, cartItems } =
    useContext(CartContext);

  const items = [
    {
      id: 1,
      name: "A set of Rilakkuma",
      category: "Toy",
      price: 100,
      photo: small_toy,
    },
    {
      id: 2,
      name: "Rilakkuma Cake",
      category: "Toy",
      price: 50,
      photo: kuma_cake,
    },
  ];

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      increaseCount1(item.id);
    } else {
      addToCart(item);
      increaseCount1(item.id);
    }
  };

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setAnimate(true);
  }, []);

  return (
    <div>
      <div className="title">
        <h1 className={`welcome ${animate ? "animate-class" : ""}`}>
          Welcome to Kuma's Store!
        </h1>
      </div>
      <div className="header">
        <img className="header_image" src={header} alt="kuma" />
      </div>
      <div>
        <h2 className="item_title">Popular Items</h2>
        <ul className="item_menu">
          {items.map((item) => (
            <li key={item.id}>
              <div className="item_box">
                <img src={item.photo} alt="product" className="item_image" />
                <div className="item_description">
                  <p>{item.name}</p>
                  <div className="item_price_add">
                    <p>$ {item.price}</p>
                    <Button onClick={() => handleAddToCart(item)}>
                      Add to Cart{" "}
                      {count1[item.id] > 0 && <> ({count1[item.id]})</>}
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <NavLink to="/products" className="seeMore">
          Click Here To See More Products❤️️
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
