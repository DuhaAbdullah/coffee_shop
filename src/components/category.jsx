import { Link } from "react-router-dom";

function Category(props) {
  return (
    <div className="product-container">
      <div className="product-image-wrapper">
        <img src={props.image} />
      </div>
      <p>{props.name}</p>
      <Link to={props.link} state={props.data}></Link>
    </div>
  );
}

export default Category;
