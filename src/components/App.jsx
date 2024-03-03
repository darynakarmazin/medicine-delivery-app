import { Routes, Route, NavLink } from "react-router-dom";
import ShopsPage from "../pages/ShopsPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Shops</NavLink>
        {" | "}
        <NavLink to="/shopping-cart">Shopping cart</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      </Routes>
    </div>
  );
}

export default App;
