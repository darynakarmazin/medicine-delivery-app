import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Shops</NavLink>
      {" | "}
      <NavLink to="/shopping-cart">Shopping cart</NavLink>
    </nav>
  );
}

export default Navigation;
