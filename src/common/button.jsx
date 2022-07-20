function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`app-button ${props.className || ""}`}
      disabled={props.disabled}
      id={props.id}
    >
      {props.children}
    </button>
  );
}

export default Button;
