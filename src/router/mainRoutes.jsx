import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import ProductsPage from "../components/productsPage";
import Menu from "../components/menu";
import categories from "../data.json";
import Category from "../components/category";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:category" element={<ProductsPage />} />
    </Routes>
  );
}

export default MainRouter;
