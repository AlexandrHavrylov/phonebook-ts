import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const loginUser = createAsyncThunk(
  "auth/login",

  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("users/login", credentials);
      token.set(data.token);
      toast.success(`Привет ${data.user.name}`);
      return data;
    } catch (error) {
      toast.warning("Что-то пошло не так! Проверьте свои учетные данные");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.post("users/logout", token);
      toast.success(`До скорой встречи`);
      return data;
    } catch (error) {
      toast.warning("Что-то пошло не так! Проверьте свои учетные данные");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurent = createAsyncThunk(
  "auth/getcurent",
  async (_, thunkAPI) => {
    try {
      const tkn = thunkAPI.getState().auth.token;
      token.set(tkn);
      const { data } = await axios.get("users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
