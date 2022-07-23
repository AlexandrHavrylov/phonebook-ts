import React, { useEffect, useState } from "react";
import AddContactForm from "../components/AddContactForm/AddContactForm";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getContacts } from "../redux/contacts/contacts-actions";

export default function ContactsPage() {
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
    <div>
      ContactsPage
      <ul>
        {contacts?.map((el) => (
          <li key={el._id}>
            <span>{el.name}</span>
            <span>{el.phone}</span>
            <span>{el.email}</span>
          </li>
        ))}
      </ul>
      <AddContactForm />
    </div>
  );
}
