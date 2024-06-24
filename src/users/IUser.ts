export interface IUser {
  id: number | undefined;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  isReviewer: boolean;
  isAdmin: boolean;
}
