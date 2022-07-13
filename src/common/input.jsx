function Input(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
    ></input>
  );
}

export default Input;
