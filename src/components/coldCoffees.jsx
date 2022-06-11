import Category from "./category";
import categories from "../data.json";

function ColdCoffees() {
  return (
    <div>
      <div className="cold-drinks-container">
        {categories.coldDrinks.map((drinks) => {
          <Category link="" name={drink.name} image={drink.image} />;
        })}
      </div>
    </div>
  );
}

export default ColdCoffees;
