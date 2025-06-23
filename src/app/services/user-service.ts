import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseApi } from '../interfaces/responseApi'
import { IUser } from '../interfaces/user'

interface IResponsCreateUser extends IResponseApi {
  status: string,
  message: string,
  data?: IUser
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  postCreateUser(name: string, email: string, password: string): Observable<IResponsCreateUser> {
    const urlLogin = `${this.apiUrl}/users/create`;
    const jsonData = { name, email, password };
    return this.http.post<IResponsCreateUser>(urlLogin, jsonData);
  }

}
