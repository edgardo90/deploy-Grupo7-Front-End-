import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseApi } from '../interfaces/responseApi';
import { IBook } from '../interfaces/book'

interface IResponseBook extends IResponseApi {
  data?: IBook
}

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://grupo7-back-end-production.up.railway.app/';

  postBook(title: string, author: string, category: string, genre: string, description: string, editorial: string, imageURL: string, userId: string): Observable<IResponseBook> {
    const urlPostBook = `${this.apiUrl}/books/create`;
    const jsonData = {
      title,
      author,
      category,
      genre,
      description,
      editorial,
      imageURL,
      userId
    };
    return this.http.post<IResponseBook>(urlPostBook, jsonData);
  }

  deleteBook(bookId: string): Observable<IResponseApi> {
    return this.http.delete<IResponseApi>(`${this.apiUrl}/books/find/${bookId}`);
  }

  getBookByid(bookId: string): Observable<IResponseBook> {
    return this.http.get<IResponseApi>(`${this.apiUrl}/books/find/${bookId}`);
  }

  patchBookId(bookId: string , title: string, author: string, category: string, genre: string, description: string, editorial: string, imageURL: string, ): Observable<IResponseBook> {
    const urlPostBook = `${this.apiUrl}/books/find/${bookId}`;
       const jsonData = {
      title,
      author,
      category,
      genre,
      description,
      editorial,
      imageURL,
      bookId
    };
    return this.http.patch<IResponseBook>(urlPostBook, jsonData);
  }

}
