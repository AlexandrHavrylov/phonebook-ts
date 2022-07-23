export interface IAuthState {
  token: string;
  user: User;
  isLogedIn: boolean;
  isLoading: boolean;
  isRegisred: boolean;
}

export interface ILoginResponse {
  token: string;
  user: User;
}

export interface User {
  email: string;
  subscription: string;
  avatar: string;
}

export interface UserData {
  email: string;
  password: string;
}
