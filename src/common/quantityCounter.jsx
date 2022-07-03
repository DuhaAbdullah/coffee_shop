import { useState } from "react";
import Button from "./button";

function QuantityCounter(props) {
  return (
    <div className={`sub-counter-container ${props.className}`}>
      <Button onClick={props.onDecrement} className="counter-button" id={props.id}>
        -
      </Button>
      <div className="results">{props.quantity}</div>
      <Button onClick={props.onIncrement} className="counter-button" id={props.id}>
        +
      </Button>
    </div>
  );
}

export default QuantityCounter;
