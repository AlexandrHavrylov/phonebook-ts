import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import {
  IContactResponse,
  IContactsState,
} from "./../../types/contacts/contactsTypes";
import { AddContact, getContacts } from "./contacts-actions";
const LS_CONTACTS_KEY = "lsck";

const userState = {
  contacts: [],
  isLoading: false,
};

const initialState: IContactsState = JSON.parse(
  localStorage.getItem(LS_CONTACTS_KEY) ?? JSON.stringify(userState)
);

const contacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddContact.pending, (state: IContactsState, _) => {
        state.isLoading = true;
      })

      .addCase(
        AddContact.fulfilled,
        (state: IContactsState, action: PayloadAction<any>) => {
          state.contacts.push(action.payload);
          state.isLoading = false;
        }
      )
      .addCase(
        getContacts.fulfilled,
        (state: IContactsState, action: PayloadAction<any>) => {
          state.contacts = action.payload;
          state.isLoading = false;
        }
      );
  },
});
export default contacts.reducer;
