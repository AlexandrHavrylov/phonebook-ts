import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  deleteContact,
  getContacts,
} from "../../redux/contacts/contacts-actions";
import { Contact, DeleteBtn, List } from "./ContactsListStyled";

export default function ContactsList() {
  const contacts = useAppSelector((state) => state.contacts.contacts);
  const dispatch = useAppDispatch();
  const [contact, setContact] = useState(contacts);

  useEffect(() => {
    setContact(contacts);
  }, [contacts]);

  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <List>
      {contacts?.map((el) => (
        <Contact key={el._id}>
          <span>Имя:{el.name}</span>
          <span>Телефон:{el.phone}</span>
          <span>Почта: {el.email}</span>
          <DeleteBtn onClick={() => dispatch(deleteContact(el._id))}>
            Удалить контакт
          </DeleteBtn>
        </Contact>
      ))}
    </List>
  );
}
