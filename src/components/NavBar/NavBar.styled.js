import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Naviagtion = styled.nav`
  padding: 16px 10px;
  background-color: #a6a6a6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #e6e6e6;
  font-weight: 700;
  &.active {
    color: #3399ff;
  }
`;

export const UnlogedBarWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
