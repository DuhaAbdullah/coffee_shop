import { useState } from "react";
import { Link } from "react-router-dom";

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
    </div>
  );
}

export default NavBar;
