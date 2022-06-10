import NavBar from "./navBar";
import Category from "./category";

function Menu() {
  return (
    <div>
      <NavBar />
      <div className="menu-container">
        <h1>Menu</h1>
        <h2>Drinks</h2>
        <hr />
        <div className="categories-container">
          <Category
            link="/hot-coffees"
            name="Hot Coffees"
            image="/images/black.webp"
          />
          <Category
            link="cold-coffees"
            name="Cold Coffees"
            image="/images/chocolate-brew.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;