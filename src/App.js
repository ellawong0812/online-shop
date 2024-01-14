import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import ShoppingCart from "./Components/ShoppingCart";
import Products from "./Components/Products";
import CartContextProvider from "./Components/CartContext.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename="/online-shop">
      <CartContextProvider>
        <div>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
