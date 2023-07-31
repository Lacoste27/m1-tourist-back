export interface IUser {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  salt: string;
}

export interface IUserRequest {
  email: string;
  password: string;
}

export interface IUserResponse {
  nom?: string;
  prenom?: string;
  email?: string;
  token?: string;
}
