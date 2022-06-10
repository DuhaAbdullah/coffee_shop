import Category from "./category";
import categories from "../data.json";

function HotCoffees() {
  return (
    <div>
      {categories.coldDrinks.map((drink) => (
        <Category link="" name={drink.name} image={drink.image} />
      ))}
    </div>
  );
}

export default HotCoffees;
