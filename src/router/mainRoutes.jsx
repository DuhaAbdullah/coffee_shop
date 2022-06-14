import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import ProductsPage from "../pages/productsPage";
import Menu from "../pages/menu";
import categories from "../data.json";
import Category from "../components/category";
import SingleProductPage from "../pages/singleProductPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:category" element={<ProductsPage />} />
      <Route
        path="/menu/:category/:productId"
        element={<SingleProductPage />}
      />
    </Routes>
  );
}

export default MainRouter;
