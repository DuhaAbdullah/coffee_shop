import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import HotCoffees from "../components/hotCoffees";
import Menu from "../components/menu";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/hot-coffees" element={<HotCoffees />} />
    </Routes>
  );
}

export default MainRouter;
