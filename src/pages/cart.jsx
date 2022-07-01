import QuantityCounter from "../common/quantityCounter";
import NavBar from "../components/navBar";
import { useState } from "react";
import data from "../data.json";
import Button from "../common/button";

function Cart() {
  const [count, setCount] = useState(0);
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
            <tr>
              <td>
                <img src="/images/hot-espresso.webp" />
              </td>
              <td>Rs. 500</td>
              <td>
                <QuantityCounter
                  className="cart-quantity-counter"
                  onIncrement={incrementCount}
                  onDecrement={decrementCount}
                  quantity={count}
                />
              </td>
              <td>$345</td>
            </tr>
            <tr>
              <td>title</td>
              <td>$@#</td>
              <td>
                <QuantityCounter
                  className="cart-quantity-counter"
                  onIncrement={incrementCount}
                  onDecrement={decrementCount}
                  quantity={count}
                />
              </td>
              <td>$456</td>
            </tr>
          </tbody>
        </table>
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
            <h4>Grand total</h4>
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
