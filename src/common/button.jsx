function Button({ click, children, className }) {

  return (
    <button onClick={click} className={!className ? "app-button" : className}>
      {children}
    </button>
  );
}

export default Button;
