import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import LoggedBar from "./LoggedBar";
import { Naviagtion, StyledLink } from "./NavBar.styled";
import UnlogedBar from "./UnlogedBar";

export default function NavBar() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLogedIn);
  return (
    <Naviagtion>
      <StyledLink to={"/contacts"}> Телефонная книга</StyledLink>
      {isLoggedIn ? <LoggedBar /> : <UnlogedBar />}
    </Naviagtion>
  );
}
