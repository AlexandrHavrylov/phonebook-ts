import { RootState } from "./../store";
import { IAuthState } from "./../../types/login/index";
import { ILoginResponse, User, UserData } from "../../types/login/index";
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

export const logInUser = createAsyncThunk<ILoginResponse, UserData>(
  "auth/logInUser",
  async (user: UserData) => {
    try {
      const { data } = await axios.post("/users/login", user);
      token.set(data.data.token);
      toast.success("Приветствую в твоей телефонной книге!");
      return data.data as ILoginResponse;
    } catch (error) {
      toast.error("Вы ввели некорректные данные");
      throw new Error();
    }
  }
);

export const regUser = createAsyncThunk<User, UserData>(
  "auth/regUser",
  async (user: UserData) => {
    try {
      const { data } = await axios.post("/users/signup", user);

      toast.success(
        "Успешно зарегестрированы, войдите используя почту и пароль"
      );
      return data.data as User;
    } catch (error) {
      toast.error("Упс, что то пошло не так");
      throw new Error();
    }
  }
);

export const logOut = createAsyncThunk<void, void, { state: RootState }>(
  "auth/logOut",
  async (_, { getState }) => {
    try {
      const tkn = getState().auth.token;
      token.set(tkn);
      const { data } = await axios.get("/users/logout");
      toast.success("До скорой встречи");
      return data;
    } catch (error) {
      toast.error("Упс, что то пошло не так");
      throw new Error();
    }
  }
);
