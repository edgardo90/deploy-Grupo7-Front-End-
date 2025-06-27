import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { ICollection } from '../interfaces/collection';
import {IResponseApi} from '../interfaces/responseApi';
 
interface IResponseCollection extends IResponseApi {
  data?: ICollection; 
}

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private apiUrl = 'https://deploy-grupo7-front-end.vercel.app/';

  constructor(private http: HttpClient) {}


  createCollection(data: Partial<ICollection>, userId: string): Observable<IResponseCollection> {
    console.log(userId);
    const jsonData = { ...data, userId };
    return this.http.post<IResponseCollection>(`${this.apiUrl}`, jsonData);
  }

  getUserCollections(userId: string): Observable<ICollection[]> {
    return this.http.get<ICollection[]>(`${this.apiUrl}/user/${userId}`);
  }

  addBookToCollection(collectionId: string, bookId: string): Observable<ICollection> {
    return this.http.put<ICollection>(`${this.apiUrl}/${collectionId}/add-book`, { bookId });
  }
}
