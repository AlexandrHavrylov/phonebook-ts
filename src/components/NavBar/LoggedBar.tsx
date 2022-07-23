import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logOut } from "../../redux/auth/auth-action";

import { ExitBtn, LoggedBarWrapper, UserAvatar } from "./NavBar.styled";

export default function LoggedBar() {
  const avatar = useAppSelector((state) => state.auth.user.avatar);
  const dispatch = useAppDispatch();
  return (
    <LoggedBarWrapper>
      <UserAvatar
        src={avatar}
        alt="Аватар пользовтеля"
        width="32"
        height="32"
      />
      <ExitBtn onClick={() => dispatch(logOut())}>Выйти</ExitBtn>
    </LoggedBarWrapper>
  );
}
