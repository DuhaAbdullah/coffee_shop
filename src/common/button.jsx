function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`app-button ${props.className}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
