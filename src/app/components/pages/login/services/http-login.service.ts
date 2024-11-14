import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URLAPI = 'http://localhost:8081/api/auth/authenticate'

@Injectable({providedIn: 'root'})
export class HttpLoginService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate(email:string,password:string){
    const headers = {'Content-Type': 'application/json',}
    const body = {email, password}
    return this.http.post( URLAPI, body, { headers } )
  }
}
