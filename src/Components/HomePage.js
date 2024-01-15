import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import header from "../Assets/header.jpg";
import "./HomePage.css";
import small_toy from "../Assets/small_toy.jpg";
import kuma_cake from "../Assets/kuma_cake.jpg";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const { addToCart } = useContext(CartContext);

  const items = [
    { id: 1, name: "A set of Rilakkuma", price: 100, photo: small_toy },
    { id: 2, name: "Rilakkuma Cake", price: 50, photo: kuma_cake },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    alert("Added to Cart!");
  };

  return (
    <div>
      <div className="header_box">
        <h1 className="title">Welcome to Kuma's Store</h1>
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
                      Add to Cart
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
