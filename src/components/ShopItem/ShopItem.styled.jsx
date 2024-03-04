import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ShopCard = styled(NavLink)`
  display: flex;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 3px solid #94bbe9;
  border-radius: 12px;

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
