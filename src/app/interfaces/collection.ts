export interface ICollection {
    _id: string;
    name: string;
    type: string;
    books: string[]; // referencias a los IDs de libros
}
