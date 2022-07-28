import NavBar from "../components/navBar";
import { useLocation } from "react-router-dom";
import Button from "../common/button";
import { useState } from "react";
import QuantityCounter from "../common/quantityCounter";
import RadioButton from "../common/radioButton";
import { useEffect } from "react";

function SingleProductPage() {
  const location = useLocation();
  const [count, setCount] = useState(1);
  const [productData, setProductData] = useState({ sizes: [] });
  const [isSelected, setIsSelected] = useState(true);

  const { id, image, name, price, description, sizes, selectedSize } =
    productData;

  useEffect(() => {
    setProductData(location.state);
  }, [location.state]);

  function handleClickAddToCart(e) {
    const cartItems = localStorage.getItem("cartItems");
    const convertedItems = JSON.parse(cartItems) || [];
    const currentItem = convertedItems.find(
      (item) => item.id === id && selectedSize === item.selectedSize
    );

    if (!selectedSize) {
      setIsSelected(false);
    } else {
      if (!convertedItems.length) {
        console.log("cart is empty length 0");
        localStorage.setItem(
          "cartItems",
          JSON.stringify([{ ...productData, quantity: count }])
        );
      } else {
        if (currentItem) {
          const filteredData = convertedItems.filter((item) => item.id === id);
          const filteredSizes = filteredData.filter(
            (item) => item.selectedSize !== selectedSize
          );
          const restItems = convertedItems.filter(
            (item) => item.id !== currentItem.id
          );

          localStorage.setItem(
            "cartItems",
            JSON.stringify([
              ...restItems,
              ...filteredSizes,
              { ...currentItem, quantity: count + currentItem.quantity },
            ])
          );
        } else {
          localStorage.setItem(
            "cartItems",
            JSON.stringify([
              ...convertedItems,
              { ...productData, quantity: count },
            ])
          );
        }
      }
    }
  }

  function handleSizeChange(e) {
    const { value } = e.target;
    setProductData({ ...productData, selectedSize: value });
    setIsSelected(true);
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
        <img src={image} alt="for product" />
        <h1>{name}</h1>
      </div>
      <div className="product-body">
        <div className="product-image-container">
          <img src={image} alt="for product body"/>
        </div>
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p className="product-price"> Rs.{price}</p>
          <hr />
          <p className="product-description">{description}</p>
          <p className="product-size">Size:</p>
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
            <p className="product-quantity">Quantity:</p>
            <QuantityCounter
              className="cart-quantity-counter"
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </div>
          <Button className="click-add-to-cart" onClick={handleClickAddToCart}>
            Add to cart
          </Button>
          {!isSelected ? (
            <p className="warning-message">Please select a size !</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
