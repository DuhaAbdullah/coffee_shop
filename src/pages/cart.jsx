import QuantityCounter from "../common/quantityCounter";
import NavBar from "../components/navBar";
import { useState } from "react";
import Button from "../common/button";
import CrossIcon from "../icons/crossIcons";

function Cart() {
  const [count, setCount] = useState(0);

  const cartItems = localStorage.getItem("cartItems");
  const items = JSON.parse(cartItems);

  function incrementCount(e) {
    const { id } = e.target;
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrementCount(e) {
    const { id } = e.target;
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // console.log(data)

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
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} />
                  </td>
                  <td>Rs. {item.price}</td>
                  <td>
                    <QuantityCounter
                      className="cart-quantity-counter"
                      onIncrement={incrementCount}
                      onDecrement={decrementCount}
                      quantity={count}
                      id={item.id}
                    />
                  </td>
                  <td>$345</td>
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
            <p>$2234</p>
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
