import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticae = false

  login(){
    this.isAuthenticae = true
  }

  logOut(){
    this.isAuthenticae = false
  }

  isUserAuthenticate():boolean{
    return this.isAuthenticae
  }
}
