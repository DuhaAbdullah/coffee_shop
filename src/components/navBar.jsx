import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../icons/cartIcon";
function NavBar() {
  const [name, setName] = useState("Menu");
  const [isSignedIn, setIsSignedIn] = useState(false);
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
      {isSignedIn ? (
        <div className="profile-container">
          <p>Doha</p>
          <div className="profile-image-wrapper">
            <img src="images/me-croped.png" className="profile-image" />
          </div>
        </div>
      ) : (
        <div className="links-container">
          <Link to="/signIn" className="signin-link">
            <p className="signin-name">SIGN IN |</p>
          </Link>
          <Link to="/signUp" className="signup-link">
            <p className="signup-name">SIGN UP</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
