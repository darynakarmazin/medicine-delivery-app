import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.svg";
import {
  Header,
  HeaderDiv,
  LogoNavLink,
  NavigationLinks,
} from "./Navigation.styled.jsx";
function Navigation() {
  return (
    <Header>
      <HeaderDiv className="container">
        <LogoNavLink to="/">
          <img src={Logo} width={40} alt="logo" />
          Meds Delivery
        </LogoNavLink>
        <NavigationLinks>
          <NavLink to="/">Shops</NavLink>
          {" | "}
          <NavLink to="/shopping-cart">Shopping cart</NavLink>
        </NavigationLinks>
      </HeaderDiv>
    </Header>
  );
}

export default Navigation;
