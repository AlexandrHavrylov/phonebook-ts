import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth/authActions";
import { InputBase } from "@mui/material";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });

  const onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          Email
          <input
            onChange={onInputChange}
            type="text"
            name="email"
            value={user.email}
          />
        </label>

        <label>
          Password{" "}
          <input
            onChange={onInputChange}
            type="pasword"
            name="password"
            value={user.password}
          />
        </label>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}
