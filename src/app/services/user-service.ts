import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseApi } from '../interfaces/responseApi'
import { IUser } from '../interfaces/user'

interface IResponsCreateUser extends IResponseApi {
  data?: IUser
}

interface IResponseUserById extends IResponseApi {
  data?: IUser
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://deploy-grupo7-front-end.vercel.app/';

  constructor(private http: HttpClient) { }

  postCreateUser(name: string, email: string, password: string): Observable<IResponsCreateUser> {
    const urlUser = `${this.apiUrl}/users/create`;
    const jsonData = { name, email, password };
    return this.http.post<IResponsCreateUser>(urlUser, jsonData);
  }

  getUserByid(userId: string): Observable<IResponseUserById> {
    const urlUserByid = `${this.apiUrl}/users/find/${userId}`;
    return this.http.get<IResponseUserById>(urlUserByid)
  }

}
