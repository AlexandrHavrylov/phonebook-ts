export interface Contact {
  name: string;
  phone: string;
  email: string;
}

export interface IContactsState {
  contacts: IContactResponse[];
  isLoading: boolean;
}

export interface IContactResponse {
  _id: string;
  name: string;
  email: string;
  phone: string;
  favorite: boolean;
}
