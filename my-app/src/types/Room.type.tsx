import { IUser } from './User.type';

export interface IRoom {
  id: number;
  name: string;
  users: IUser[];
}

export interface IFormCreateRoom {
  userId: number;
  receiverId: number;
}
