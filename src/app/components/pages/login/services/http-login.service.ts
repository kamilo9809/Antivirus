import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/env/eviroment';

const URLAPI = `${enviroment.BASE_API}/auth/authenticate`

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
