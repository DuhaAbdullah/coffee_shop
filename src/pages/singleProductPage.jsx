import { useParams } from "react-router-dom";
import NavBar from "../components/navBar";
import categories from "../data.json";
import { useLocation } from "react-router-dom";

function SingleProductPage() {
  const params = useParams();
  const location = useLocation();
  console.log(location);

  const { image, name , price , description} = location.state;

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
          <hr/>
          <p className="product-description">{description}</p>
          <p>Size</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
