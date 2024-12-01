import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/env/eviroment';
import { RolesModel } from 'src/interfaces/roles.interface';

const URL = `${enviroment.BASE_API}/role`

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private readonly http:HttpClient
  ) { }

  get(){
    const token = sessionStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get<RolesModel[]>(URL,{ headers })
  }
}
