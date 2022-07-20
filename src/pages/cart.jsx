import QuantityCounter from "../common/quantityCounter";
import NavBar from "../components/navBar";
import { useState, useEffect } from "react";
import Button from "../common/button";
import CrossIcon from "../icons/crossIcons";
import cities from "../cities.json";
import TextField from "../common/textField";
import RadioButton from "../common/radioButton";
import { useNavigate } from "react-router-dom";

const coupons = [
  { id: 1, phrase: "dis15", discount: 0.15 },
  { id: 2, phrase: "dis10", discount: 0.1 },
];

function Cart() {
  const [items, setItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponValue, setCouponValue] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState({
    isApplied: false,
    isValid: true,
  });
  
   
  const [order, setOrder] = useState({
    orderId: "",
    products: [],
    shippingInfo: {
      firstName: "",
      lastName: "",
      address: "",
      phone: 0,
      city: "",
      postalCode: "",
      pickupLocation: "",
    },
  });
  const [values, setValues] = useState({ isEmpty: false });
 
  const navigate = useNavigate();

  const sortedItems = items.sort((a, b) => {
    return a.id - b.id;
  });

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  !cartItems.length && (
    <p className="warning-message">Please add some products!</p>
  );


  const itemsTotal = sortedItems.map((item) => item.price * item.quantity);
  const subTotal = itemsTotal.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const tax = +(subTotal * 0.15).toFixed(2);

  useEffect(() => {
    setItems(cartItems);
    setOrder({ ...order, products: cartItems });
  }, []);

  useEffect(() => {
    const coupon = coupons.find(
      (coupon) => coupon.phrase === couponValue.toLowerCase()
    );

    if (coupon) {
      const discount = (subTotal + tax) * coupon.discount;
      setDiscountAmount(discount.toFixed(2));
      setGrandTotal((subTotal + tax - discount).toFixed(2));
    } else {
      setDiscountAmount(0);
      setGrandTotal(subTotal + tax);
    }
  }, [tax, subTotal]);

  function handleIncrement(e, quantity) {
    const { id } = e.target;
    const editedItem = sortedItems.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, quantity: quantity };
      } else {
        return item;
      }
    });
    setItems(editedItem);
    setOrder(editedItem);
  }

  function handleDecrement(e, quantity) {
    const { id } = e.target;
    const editedItem = sortedItems.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, quantity: quantity };
      } else {
        return item;
      }
    });
    setItems(editedItem);
    setOrder(editedItem);
    localStorage.setItem("cartItems", JSON.stringify(editedItem)); 
  }

  function handleDelete(e) {
    const { id } = e.target;
    console.log(id)
    const filterItems = sortedItems.filter((item) => String(`${item.id}${item.selectedSize}`) !== id);
    setItems(filterItems);
    localStorage.setItem("cartItems", JSON.stringify(filterItems));
  }

  function handleCouponInputChange(e) {
    setCouponValue(e.target.value);
    setAppliedCoupon({
      isApplied: false,
      isValid: true,
    });
    if (!e.target.value) {
      setDiscountAmount(0);
      setGrandTotal(subTotal + tax);
    }
  }

  function handleApplyButton(e) {
    const coupon = coupons.find(
      (coupon) => coupon.phrase === couponValue.toLowerCase()
    );
    if (coupon && !appliedCoupon.isApplied && !discountAmount) {
      const discount = grandTotal * coupon.discount;
      setDiscountAmount(discount.toFixed(2));
      setAppliedCoupon({ ...appliedCoupon, isApplied: true });
      setGrandTotal((grandTotal - discount).toFixed(2));
    } else if (!coupon) {
      setAppliedCoupon({ isValid: false, isApplied: true });
    } else if (coupon && !appliedCoupon.isApplied && discountAmount) {
      const discount = (subTotal + tax) * coupon.discount;
      setDiscountAmount(discount.toFixed(2));
      setAppliedCoupon({ ...appliedCoupon, isApplied: true });
      setGrandTotal((subTotal + tax - discount).toFixed(2));
    }
  }

  function handleTextField(e) {
    const { value, name } = e.target;
    setOrder({
      ...order,
      shippingInfo: { ...order.shippingInfo, [name]: value },
    });
    if({...order.shippingInfo, [name]: value }){
      setValues({...values , isEmpty: true});
    }

  }

  function handleCheckout(e) {
    setOrder({
      ...order,
      orderId: String(Math.floor(Math.random() * 899999 + 100000)),
    });
    navigate("/thankyou");
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
                <tr key={`${item.id}${item.selectedSize}`}>
                  <td>
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <div className="size-badge-container">
                      <p className="size-badge">
                        {item.selectedSize.toUpperCase()}
                      </p>
                    </div>
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
                    Rs.{" "}
                    {item.quantity ? item.price * item.quantity : item.price}
                  </td>
                  <td className="delete-cross">
                    <div className="delete-icon-container">
                      <CrossIcon size={15} />
                      <div
                        className="delete-icon-layer"
                        onClick={handleDelete}
                        id={`${item.id}${item.selectedSize}`}
                      ></div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="warning-message-container">
          {!cartItems.length && (
            <p className="warning-message">PLEASE ADD SOME PRODUCTS!</p>
          )}
        </div>
        <div className="coupon-container">
          <div className="coupon">
            <div className="coupon-wrapper">
              <label htmlFor="coupon">Coupon: </label>
              <TextField
                type="text"
                name="coupon"
                id="coupon"
                onChange={handleCouponInputChange}
              />
              <Button onClick={handleApplyButton} className="apply-button">
                Apply
              </Button>
            </div>
            <div>
              {!appliedCoupon.isValid && (
                <p className="warning-message">wrong coupon code!</p>
              )}
            </div>
          </div>
        </div>
        <div className="cart-total">
          <div className="sub-total">
            <h4>Sub Total</h4>
            <p>Rs.{subTotal}</p>
          </div>
          <div className="tax">
            <h4>Tax</h4>
            <p>Rs.{tax}</p>
          </div>
          <div className="discount">
            <h4>Discount</h4>
            <p>Rs. {discountAmount}</p>
          </div>
          <div className="total">
            <h4>Grand Total</h4>
            <p>Rs. {grandTotal}</p>
          </div>
        </div>
      </div>
      <div className="shipping-information-container">
        <div className="shipping-title">
          <h2>SHIPPING INFORMATION</h2>
        </div>
        <form className="shipping-information">
          <div className="inputs-name-wrapper">
            <TextField
              placeholder="First Name"
              className="input-field"
              onChange={handleTextField}
              name="firstName"
            />
            <TextField
              placeholder="Last Name"
              className="input-field"
              onChange={handleTextField}
              name="lastName"
            />
            <TextField
              placeholder="Address"
              className="input-field"
              onChange={handleTextField}
              name="address"
            />
            <TextField
              placeholder="Phone"
              className="input-field"
              onChange={handleTextField}
              name="phone"
            />
            <select
              className="first-option"
              name="city"
              onChange={handleTextField}
            >
              <option value="" disabled hidden>
                City
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <TextField
              placeholder="Postal Code "
              className="input-field"
              onChange={handleTextField}
              name="postalCode"
            />
          </div>
        </form>
      </div>
      <div className="pickups-buttons">
        <h4>Please choose a pickup location:</h4>
        <form className="pickups-options" onChange={handleTextField}>
          <RadioButton
            name="pickupLocation"
            id="pickup"
            label="Store pickup"
            value="pickup"
          />
          <RadioButton
            name="pickupLocation"
            id="delivery"
            label="Delivery"
            value="delivery"
          />
        </form>
      </div>
      <div className="checkout-button-container">
        <Button
          className="checkout-button"
          onClick={handleCheckout}
          disabled={!values.isEmpty ? true : false}
        >
          Checkout
        </Button>
      </div>
      {!values.isEmpty ? (
        <p className="warning-message">Please fill the input !</p>
      ) : null}
    </div>
  );
}

export default Cart;
