import "./Products.css";
import { CartContext } from "./CartContext";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useContext } from "react";
import bread from "../Assets/bread.jpeg";
import christmas from "../Assets/christmas.jpeg";
import golden from "../Assets/golden.jpeg";
import hamburger from "../Assets/hamburger.jpg";
import ice_cream from "../Assets/ice_cream.jpg";

const products = [
  {
    name: "Bread",
    category: "Food",
    price: 30,
    photo: bread,
  },
  {
    name: "Christmas version Kuma",
    category: "Toy",
    price: 150,
    photo: christmas,
  },
  {
    name: "golden",
    category: "Toy",
    price: 220,
    photo: golden,
  },
  {
    name: "hamburger",
    category: "Food",
    price: 60,
    photo: hamburger,
  },
  {
    name: "ice-cream",
    category: "Food",
    price: 20,
    photo: ice_cream,
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const [productCategory, setProductCategory] = useState("All");
  const [filteredCategory, setFilteredCategory] = useState(products);

  const handleCategoryChange = (e) => {
    const selectCategory = e.target.value;
    setProductCategory(selectCategory);

    if (selectCategory === "") {
      setFilteredCategory(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.includes(selectCategory)
      );
      setFilteredCategory(filtered);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert("Added to Cart!");
  };

  return (
    <div>
      <div className="title">
        <h1>{productCategory}</h1>
      </div>
      <div className="Dropdown List">
        <label htmlFor="category-select">Select a category:</label>
        <select
          id="category-select"
          value={productCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="Toy">Toy</option>
          <option value="Food">Food</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredCategory.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.photo}
              alt={product.name}
              className="product-image"
            />
            <div>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
            <div>
              <Button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;