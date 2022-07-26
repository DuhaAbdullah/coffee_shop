import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import ProductsPage from "../pages/productsPage";
import Menu from "../pages/menu";
import SingleProductPage from "../pages/singleProductPage";
import Cart from "../pages/cart";
import ThankYou from "../pages/thankyou";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

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
      <Route path="/thankyou/:orderId" element={<ThankYou />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}

export default MainRouter;
