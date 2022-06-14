import NavBar from "../components/navBar";
import Category from "../components/category";
import categories from "../data.json";

function Menu() {
  return (
    <div>
      <NavBar />
      <div className="menu-container">
        <h1>Menu</h1>
        <h2>Drinks</h2>
        <hr />
        <div className="categories-container">
          {categories.map((category) => (
            <Category
              key={category.id}
              link={category.id}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
