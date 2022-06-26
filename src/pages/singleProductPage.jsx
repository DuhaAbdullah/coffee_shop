import { useParams } from "react-router-dom";
import NavBar from "../components/navBar";
import categories from "../data.json";
import { useLocation } from "react-router-dom";
import Button from "../common/button";

function SingleProductPage() {
  const params = useParams();
  const location = useLocation();
  console.log(location);

  const { image, name, price, description } = location.state;

  function click(e) {
    console.log(e);
  }

  return (
    <div>
      <NavBar />
      <div className="product-head">
        <img src={image} />
        <h1>{name}</h1>
      </div>
      <div className="product-body">
        <img src={image} />
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p className="product-price"> Rs.{price}</p>
          <hr />
          <p className="product-description">{description}</p>
          <p>Size:</p>
          <div className="options-container">
            <input type="radio" name="size" id="small" value="small" />
            <label htmlFor="small">Small</label> 
            <input type="radio" name="size" id="medium" value="medium" />
            <label htmlFor="medium">Medium</label> 
            <input type="radio" name="size" id="large" value="large" />
            <label htmlFor="large">Large</label> 
            <div className="size-option"></div>
          </div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
