import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import Menu from "../components/menu";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default MainRouter;
