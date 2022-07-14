function TextField(props) {
  return (
    <input {...props} className={`coupon-input ${props.className}`}></input>
  );
}

export default TextField;
