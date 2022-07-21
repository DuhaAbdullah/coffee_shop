function TextField({
  isValid,
  className,
  errorLabelClassName,
  errorMessage,
  containerClassName,
  name,
  placeholder,
  onChange,
}) {
  return (
    <div className={containerClassName}>
      <input
        className={`coupon-input ${className}`}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
      {isValid === false && (
        <label className={`textfield-error ${errorLabelClassName}`}>
          {errorMessage}
        </label>
      )}
    </div>
  );
}

export default TextField;
