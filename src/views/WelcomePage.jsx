import React from "react";
import { useSelector } from "react-redux";

export default function WelcomePage() {
  const userName = useSelector((state) => state.auth.user.name);
  return (
    <div>
      WELCOME PAGE{" "}
      {userName ? <span>{userName}</span> : <span>Незанкомец</span>}
    </div>
  );
}
