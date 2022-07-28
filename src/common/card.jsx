
function Card(props) {
  return (
    <div className={`card-wrapper ${props.className}`}>
        {props.children}
    </div>
  );
}

export default Card;
