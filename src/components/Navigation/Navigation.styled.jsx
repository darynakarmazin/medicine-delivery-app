import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  border-bottom: 1px solid #121417;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.5;
`;

export const LogoNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  padding: 6px;
`;

export const NavigationLinks = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;

  a {
    border-radius: 12px;
    border: 3px solid #94bbe9;
    padding: 6px 12px;

    &.active {
      background: #94bbe9;
      color: var(--White, #fff);

      &:hover,
      &:focus {
        background: #7fb3f2;
      }
    }

    &:hover,
    &:focus {
      border: 3px solid #7fb3f2;
    }
  }
`;
