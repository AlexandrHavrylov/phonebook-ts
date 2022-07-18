import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const isLogged = useSelector((state) => state.auth.isUserLoggedIn);
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
}
