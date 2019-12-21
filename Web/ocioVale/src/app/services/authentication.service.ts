import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    auth = "";
    authenticationState = false;

    constructor() {
        this.auth = sessionStorage.getItem('auth');
        this.checkToken();
    }

    checkToken() {
        if(this.auth != null && this.auth != "") {
          this.authenticationState = true;
        }
        else { this.authenticationState = false; }
      }

      isAuthenticated() {
        this.checkToken();
        return this.authenticationState;
      }

      login(token) {
          sessionStorage.setItem('auth', token);
      }

      logout() {
          sessionStorage.clear();
      }


}
