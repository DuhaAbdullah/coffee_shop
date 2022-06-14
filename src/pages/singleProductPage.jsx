import { useParams } from "react-router-dom";
import NavBar from "../components/navBar";
import categories from "../data.json";
import { useLocation } from "react-router-dom";

function SingleProductPage() {
  const params = useParams();
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <NavBar />
      <div className="product-head">
        <img src={location.state.image} />
        <h1>{location.state.name}</h1>
      </div>
    </div>
  );
}

export default SingleProductPage;
