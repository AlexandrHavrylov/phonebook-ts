import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./authActions";

const initialState = {
  user: { name: "", email: "" },
  token: "",
  isUserLoggedIn: false,
  isLoadingUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  redusers: {},
  extraReducers: {
    [authOperations.loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isUserLoggedIn = true;
      state.isLoadingUser = false;
    },
    [authOperations.logout.fulfilled](state) {
      state.user = {};
      state.token = "";
      state.isUserLoggedIn = false;
      state.isLoadingUser = false;
    },
    [authOperations.getCurent.fulfilled](state, action) {
      state.user = action.payload;
      state.isUserLoggedIn = true;
      state.isLoadingUser = false;
    },
    [authOperations.getCurent.rejected](state, _) {
      state.user = null;
      state.token = "";
      state.isUserLoggedIn = false;
      state.isLoadingUser = false;
    },
  },
});
