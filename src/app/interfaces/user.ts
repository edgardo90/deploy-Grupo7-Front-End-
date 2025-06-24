import { IBook } from './book';
import { ICollection } from './collection';

export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    books: IBook[];
    collections: ICollection[]
}
