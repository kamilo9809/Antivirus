import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/env/eviroment';

const URL = `${enviroment.BASE_API}/institutions`

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(
    private readonly http:HttpClient
  ) { }

  get(){
    const token = sessionStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get<any>(URL,{ headers })
  }
}