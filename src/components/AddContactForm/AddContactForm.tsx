import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { AddContact } from "../../redux/contacts/contacts-actions";
import {
  AddBtn,
  AddContactInput,
  AddContactLabel,
  ContactForm,
} from "./AddContactForm.styled";

export default function AddContactForm() {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const dispatch = useAppDispatch();

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onAddClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(AddContact(contact));
  };

  return (
    <ContactForm>
      <AddContactLabel htmlFor="name">Имя</AddContactLabel>
      <AddContactInput
        onChange={onInputChange}
        type="text"
        name="name"
        id="name"
        value={contact.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        placeholder="Введите имя"
      />
      <AddContactLabel htmlFor="phone">Номер телефона</AddContactLabel>
      <AddContactInput
        onChange={onInputChange}
        type="text"
        name="phone"
        id="phone"
        value={contact.phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        placeholder="Введите номер телефона"
      />

      <AddContactLabel htmlFor="email">Электронная потча</AddContactLabel>
      <AddContactInput
        onChange={onInputChange}
        type="text"
        name="email"
        id="email"
        value={contact.email}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
        placeholder="Введите почту"
      />

      <AddBtn onClick={onAddClick} type="submit">
        Добавить контакт
      </AddBtn>
    </ContactForm>
  );
}
