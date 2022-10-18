import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IContactResponse,
  IContactsState,
} from "./../../types/contacts/contactsTypes";
import { AddContact, deleteContact, getContacts } from "./contacts-actions";
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
        (state: IContactsState, action: PayloadAction<IContactResponse>) => {
          state.contacts.push(action.payload);
          state.isLoading = false;
        }
      )
      .addCase(
        getContacts.fulfilled,
        (state: IContactsState, action: PayloadAction<IContactResponse[]>) => {
          state.contacts = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(
        deleteContact.fulfilled,
        (state: IContactsState, action: PayloadAction<IContactResponse>) => {
          state.contacts = state.contacts.filter(
            (el) => el.name !== action.payload.name
          );
        }
      );
  },
});
export default contacts.reducer;
