import { ILoginResponse, IAuthState } from "../../types/login/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logInUser } from "./auth-action";

const LS_USTATE_KEY = "rusk";

const userState = {
  token: "",
  user: {
    email: "",
    subscription: "",
    avatar: "",
  },
  isLoading: false,
  isLogedIn: false,
};

const initialState: IAuthState = JSON.parse(
  localStorage.getItem(LS_USTATE_KEY) ?? JSON.stringify(userState)
);

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.pending, (state: IAuthState, _) => {
        state.isLoading = true;
      })
      .addCase(
        logInUser.fulfilled,
        (state: IAuthState, action: PayloadAction<ILoginResponse>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoading = false;
          state.isLogedIn = true;
          localStorage.setItem(LS_USTATE_KEY, JSON.stringify(state));
        }
      );
  },
});
export default auth.reducer;
