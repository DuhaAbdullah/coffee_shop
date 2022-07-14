import NavBar from "../components/navBar";
import { useLocation } from "react-router-dom";
import Button from "../common/button";
import { useState } from "react";
import QuantityCounter from "../common/quantityCounter";
import Input from "../common/textField";
import RadioButton from "../common/radioButton";

function SingleProductPage() {
  const location = useLocation();
  const [count, setCount] = useState(1);
  const { image, name, price, description, sizes } = location.state;

  function handleClickAddToCart(e) {
    const cartItems = localStorage.getItem("cartItems");
    const convertedItems = JSON.parse(cartItems) || [];
    const currentItem = convertedItems.find(
      (item) => item.id === location.state.id
    );

    if (!convertedItems.length) {
      localStorage.setItem(
        "cartItems",
        JSON.stringify([{ ...location.state, quantity: count }])
      );
    } else {
      if (currentItem) {
        const filtered = convertedItems.map((item) => {
          if (item.id === currentItem.id) {
            return { ...currentItem, quantity: currentItem.quantity + count };
          } else {
            return item;
          }
        });
        localStorage.setItem("cartItems", JSON.stringify(filtered));
      } else {
        localStorage.setItem(
          "cartItems",
          JSON.stringify([
            ...convertedItems,
            { ...location.state, quantity: count },
          ])
        );
      }
    }
  }

  function handleSizeChange(e) {
    const { value } = e.target;
    const cartItems = localStorage.getItem("cartItems");
    const convertedItems = JSON.parse(cartItems) || [];
    const currentItem = convertedItems.find(
      (item) => item.id === location.state.id
    );

    if (!convertedItems.length) {
      localStorage.setItem(
        "cartItems",
        JSON.stringify([{ ...location.state, selectedSize: value }])
      );
    } else {
      if (currentItem) {
        const filtered = convertedItems.map((item) => {
          if (item.id === currentItem.id) {
            return { ...currentItem, selectedSize: value };
          } else {
            return item;
          }
        });
        localStorage.setItem("cartItems", JSON.stringify(filtered));
      } else {
        localStorage.setItem(
          "cartItems",
          JSON.stringify([
            ...convertedItems,
            { ...location.state, selectedSize: value },
          ])
        );
      }
    }
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
                <RadioButton
                  key={size}
                  name="size"
                  id={size}
                  value={size}
                  label={size}
                />
              ))}
            </form>
          </div>
          <div className="counter-container">
            <p>Quantity:</p>
            <QuantityCounter
              className="cart-quantity-counter"
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </div>
          <Button
            className="click-add-to-cart"
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
