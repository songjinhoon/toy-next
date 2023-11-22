export interface User {
  id: number;
  username: string;
  // password: string;
  nickname: string;
  email: string;
  tellNum: string;
  address: string;
}

export interface ISignUpUser {
  username: string;
  password: string;
  nickname: string;
  email: string;
  tellNum: string;
  address: string;
}

export interface ISignInUser {
  username: string;
  password: string;
}
