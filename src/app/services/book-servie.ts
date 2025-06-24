import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseApi } from '../interfaces/responseApi';
import { IBook } from '../interfaces/book'

interface IResponsePostBook extends IResponseApi {
  data?: IBook
}

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  postBook(title:string , author:string , category:string , genre:string , description:string , editorial:string , imageURL:string , userId:string ):Observable<IResponsePostBook>{
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
    return this.http.post<IResponsePostBook>(urlPostBook , jsonData);
  }
deleteBook(bookId: string): Observable<IResponseApi> {
return this.http.delete<IResponseApi>(`${this.apiUrl}/books/find/${bookId}`);
}

}
