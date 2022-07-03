import { useParams } from "react-router-dom";
import NavBar from "../components/navBar";

import { useLocation } from "react-router-dom";
import Button from "../common/button";
import { useState } from "react";

import QuantityCounter from "../common/quantityCounter";

function SingleProductPage() {
  const location = useLocation();
  const [count, setCount] = useState(0);

  const { image, name, price, description, sizes } = location.state;

  function handleClickAddToCart(e) {
    const cartItems = localStorage.getItem("cartItems");

    if (cartItems) {
      const convertedItems = JSON.parse(cartItems);
      convertedItems.push(location.state);
      localStorage.setItem("cartItems", JSON.stringify(convertedItems));
    } else {
      localStorage.setItem("cartItems", JSON.stringify([location.state]));
    }
  }

  function handleSizeChange(e) {
    console.log(e.target.value);
  }

  function incrementCount(e) {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrementCount(e) {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <NavBar />
      <div className="product-head">
        <img src={image} />
        <h1>{name}</h1>
      </div>
      <div className="product-body">
        <div className="product-image-container">
          <img src={image} />
        </div>
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p className="product-price"> Rs.{price}</p>
          <hr />
          <p className="product-description">{description}</p>
          <p>Size:</p>
          <div className="options-container">
            <form onChange={handleSizeChange}>
              {sizes.map((size) => (
                <div key={size} className="size-option">
                  <input type="radio" name="size" id={size} value={size} />
                  <label htmlFor={size}>{size.toUpperCase()}</label>
                </div>
              ))}
            </form>
          </div>
          <div className="counter-container">
            <p>Quantity:</p>
            <QuantityCounter
              onIncrement={incrementCount}
              onDecrement={decrementCount}
              quantity={count}
            />
          </div>
          <Button
            disabled={count > 0 ? false : true}
            onClick={handleClickAddToCart}
          >
            Add to cart
          </Button>
          {count <= 0 ? (
            <p className="warning-message">Please add some quantity!</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
