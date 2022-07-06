import NavBar from "../components/navBar";
import { useLocation } from "react-router-dom";
import Button from "../common/button";
import { useState } from "react";
import QuantityCounter from "../common/quantityCounter";

function SingleProductPage() {
  const location = useLocation();
  const [count, setCount] = useState(1);
  const [items, setItems] = useState([]);
  const { image, name, price, description, sizes } = location.state;

  function handleClickAddToCart(e) {
    const cartItems = localStorage.getItem("cartItems");
    const convertedItems = JSON.parse(cartItems);
    //console.log(location.state);
    // const itemExists = convertedItems.find((item) => )
    // const id = localStorage.getItem("id");
    // console.log(location.state);

    if (cartItems) {
      convertedItems.push({ ...location.state, quantity: count });
      localStorage.setItem("cartItems", JSON.stringify(convertedItems));
    } else {
      localStorage.setItem(
        "cartItems",
        JSON.stringify([{ ...location.state, quantity: count }])
      );
    }
  }

  function handleSizeChange(e) {
    console.log(e.target.value);
  }

  function handleIncrement(e, quantity) {
    setCount(quantity);
  }

  function handleDecrement(e, quantity) {
    setCount(quantity);
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
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </div>
          <Button
            // disabled={count >= 1 ? false : true}
            onClick={handleClickAddToCart}
          >
            Add to cart
          </Button>
          {/* {count < 1 ? (
            <p className="warning-message">Please add some quantity!</p>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
