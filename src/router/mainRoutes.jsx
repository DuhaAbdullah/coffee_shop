import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import ProductsPage from "../pages/productsPage";
import Menu from "../pages/menu";
import SingleProductPage from "../pages/singleProductPage";
import Cart from "../pages/cart";
import ThankYou from "../pages/thankyou";

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
      <Route path="/cart" element={<Cart />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default MainRouter;
