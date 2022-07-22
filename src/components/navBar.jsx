import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../icons/cartIcon";
function NavBar() {
  const [name, setName] = useState("Menu");

  function handleClick() {
    setName("Clicked!");
  }

  const cartItems = localStorage.getItem("cartItems");
  const items = JSON.parse(cartItems);

  return (
    <div className="bar">
      <div className="logo-container">
        <a href="/" className="logo-text">
          Doha Coffee
        </a>
      </div>
      <Link to="/menu">{name}</Link>
      <Link className="cart-container" to="/cart">
        <p className="cart-name">CART</p>
        <CartIcon />
        <div className="cart-badge">
          <p>{!items ? 0 : items.length}</p>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
