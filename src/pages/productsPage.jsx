import Category from "../components/category";
import categories from "../data.json";
import NavBar from "../components/navBar";
import { useParams } from "react-router-dom";

function ProductsPage() {
  let params = useParams();

  const filteredCategory = categories.find(
    (catogory) => catogory.id === params.category
  );

  return (
    <div>
      <NavBar />
      <div className="drinks-container">
        <h2>{filteredCategory.name}</h2>
        <hr />
        <div className="drinks-map">
          {filteredCategory.items.map((drink) => (
            <Category
              key={drink.id}
              link={String(drink.id)}
              data={drink}
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
