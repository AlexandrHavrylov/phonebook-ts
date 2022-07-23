import { ILoginResponse, UserLoginData } from "../../types/login/index";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://goit-learn-node.herokuapp.com/";
const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const logInUser = createAsyncThunk<ILoginResponse, UserLoginData>(
  "auth/logInUser",
  async (user) => {
    try {
      const { data } = await axios.post("/users/login", user);
      token.set(data.data.token);
      console.log(data.data);
      return data.data as ILoginResponse;
    } catch (error) {
      throw new Error();
    }
  }
);
