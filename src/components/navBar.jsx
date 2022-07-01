import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../icons/cartIcon";
function NavBar() {
  const [name, setName] = useState("Menu");

  function handleClick() {
    setName("Clicked!");
  }

  return (
    <div className="bar">
      <div className="logo-container">
        <img src="/logo192.png" />
      </div>
      <Link to="/menu">{name}</Link>
      <Link className="cart-container" to="/cart">
        <p className="cart-name">CART</p>
        <CartIcon />
        <div className="cart-badge">
          <p>0</p>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
