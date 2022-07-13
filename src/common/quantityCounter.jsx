import { useState } from "react";
import Button from "./button";

function QuantityCounter(props) {
  const [count, setCount] = useState(
    props.defaultQuantity ? props.defaultQuantity : 1
  );

  function handleIncrement(e) {
    if (count < 10) {
      setCount(count + 1);
      props.onIncrement && props.onIncrement(e, count + 1);
    }
  }

  function handleDecrement(e) {
    if (count > 1) {
      setCount(count - 1);
      props.onDecrement && props.onDecrement(e, count - 1);
    }
  }

  return (
    <div className={`sub-counter-container ${props.className}`}>
      <Button
        onClick={handleDecrement}
        className="counter-button button-left"
        id={props.id}
      >
        -
      </Button>

      <div className="results">{count}</div>
      <Button
        onClick={handleIncrement}
        className="counter-button button-right"
        id={props.id}
      >
        +
      </Button>
    </div>
  );
}

export default QuantityCounter;
