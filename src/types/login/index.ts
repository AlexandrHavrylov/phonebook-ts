export interface IAuthState {
  token: string;
  user: User;
  isLogedIn: boolean;
  isLoading: boolean;
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

export interface UserLoginData {
  email: string;
  password: string;
}
