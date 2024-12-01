import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/env/eviroment';
import { UserModel } from 'src/interfaces/user.interface';

const URL = `${enviroment.BASE_API}/users`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http:HttpClient
  ) { }

  get(){
    const token = sessionStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get<UserModel[]>(URL,{ headers })
  }
}
