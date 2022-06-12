import Category from "./category";
import categories from "../data.json";
import NavBar from "./navBar";
import { useParams } from "react-router-dom";

function ProductsPage() {
  let params = useParams();
  console.log(categories[params.category]);

  return (
    <div>
      <NavBar />
      <div className="drinks-container">
        <h2>{categories[params.category].name}</h2>
        <hr />
        <div className="drinks-map">
          {categories[params.category].items.map((drink) => (
            <Category
              key={drink.id}
              link=""
              name={drink.name}
              image={drink.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
