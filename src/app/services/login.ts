import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseApi } from '../interfaces/responseApi'
import { IUser } from '../interfaces/user'

interface IResponseLogin extends IResponseApi {
  status: string,
  message: string,
  data?: IUser
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://deploy-grupo7-front-end.vercel.app/';
  private USER_EMAIL = 'userEmail';
  private USER_NAME = 'userName';
  private USER_ID = 'userId';

  constructor(private http: HttpClient) { }

  postLogin(email: string, password: string): Observable<IResponseLogin> {
    const urlLogin = `${this.apiUrl}/users/login`;
    const jsonData = { email, password };
    return this.http.post<IResponseLogin>(urlLogin, jsonData);
  }

  saveUserEmail(user: IUser): void {
    localStorage.setItem(this.USER_EMAIL, user.email);
  }

  saveUserName(user: IUser): void {
    localStorage.setItem(this.USER_NAME, user.name);
  }

  saveUserId(user: IUser): void {
    localStorage.setItem(this.USER_ID, user._id);
  }

  getUserEmail() {
    return localStorage.getItem(this.USER_EMAIL)
  }

  getUserName() {
    return localStorage.getItem(this.USER_NAME)
  }

  getUserId() {
    return localStorage.getItem(this.USER_ID)
  }


  logoutAndClear() {
    localStorage.clear()
  }

}
