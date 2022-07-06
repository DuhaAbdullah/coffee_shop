import QuantityCounter from "../common/quantityCounter";
import NavBar from "../components/navBar";
import { useState, useEffect } from "react";
import Button from "../common/button";
import CrossIcon from "../icons/crossIcons";

function Cart() {
  const [items, setItems] = useState([]);

  const sortedItems = items.sort((a, b) => {
    return a.id - b.id;
  });

  // console.log(sortedItems);

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  useEffect(() => {
    setItems(cartItems);
  }, []);

  function handleIncrement(e, quantity) {
    const { id } = e.target;
    const filteredItems = sortedItems.filter((item) => item.id !== Number(id));
    const clickedItem = sortedItems.find((item) => item.id === Number(id));
    console.log(clickedItem)
    setItems([
      ...filteredItems,
      {
        ...clickedItem,
        quantity: quantity,
      },
    ]);
  }

  function handleDecrement(e, quantity) {
    const { id } = e.target;
    const filteredItems = sortedItems.filter((item) => item.id !== Number(id));
    const clickedItem = sortedItems.find((item) => item.id === Number(id));
    setItems([
      ...filteredItems,
      {
        ...clickedItem,
        quantity: quantity,
      },
    ]);
  }

  return (
    <div>
      <NavBar />
      <div className="cart-title">
        <h2>SHOPPING CART</h2>
      </div>
      <div className="cart-product-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} />
                    <p>{item.name}</p>
                  </td>
                  <td>Rs. {item.price}</td>
                  <td>
                    <QuantityCounter
                      className="cart-quantity-counter"
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                      id={item.id}
                      defaultQuantity={item.quantity}
                    />
                  </td>
                  <td>
                    ${item.quantity ? item.price * item.quantity : item.price}
                  </td>
                  <td className="delete-cross">
                    <CrossIcon />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="coupon-container">
          <div className="coupon">
            <label htmlFor="coupon">Coupon: </label>
            <input type="text" name="coupon" id="coupon" />
          </div>
        </div>
        <div className="cart-total">
          <div className="sub-total">
            <h4>Sub Total</h4>
            <p>Rs.{}</p>
          </div>
          <div className="tax">
            <h4>Tax</h4>
            <p>$20</p>
          </div>
          <div className="total">
            <h4>Grand Total</h4>
            <p>$2234</p>
          </div>
        </div>
        <div className="checkout-button-container">
          <Button className="checkout-button">Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
