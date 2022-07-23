import { RootState } from "./../store";
import { toast } from "react-toastify";
import { Contact } from "./../../types/contacts/contactsTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-learn-node.herokuapp.com/";
const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const AddContact = createAsyncThunk<any, Contact, { state: RootState }>(
  "contacts/add",
  async (contact: Contact, { getState }) => {
    try {
      const tkn = getState().auth.token;
      token.set(tkn);
      const { data } = await axios.post("/api/contacts", contact);
      toast.success(`${contact.name} успешно добавлен в телефонную книгу`);
      console.log(data);
      return data.data.result;
    } catch (error) {
      toast.error("Вы ввели некорректные данные");
      throw new Error();
    }
  }
);

export const getContacts = createAsyncThunk<any, void, { state: RootState }>(
  "contacts/get",
  async (_, { getState }) => {
    try {
      const tkn = getState().auth.token;
      token.set(tkn);
      const { data } = await axios.get("/api/contacts");
      console.log(data.data.contacts);
      return data.data.contacts;
    } catch (error) {
      toast.error("Вы ввели некорректные данные");
      throw new Error();
    }
  }
);
