function RadioButton(props) {
  return (
    <div className="size-option">
      <input type="radio" name={props.name} id={props.id} value={props.value} />
      <label htmlFor={props.id}>{props.label.toUpperCase()}</label>
    </div>
  );
}

export default RadioButton;
