import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: 'header.page.html',
  styleUrls: ['header.page.scss'],
})
export class HeaderPage implements OnInit {


  constructor(public auth: AuthenticationService) {}
  autentificado  = this.auth.authenticationState;

  ngOnInit() {
      console.log(this.auth);
      console.log(location.pathname);
      if(!this.auth.isAuthenticated() && location.pathname != '' && location.pathname != '/home') {
          console.log("Auth failed");
          location.assign(location.origin);
      }
  }

  logout(){
      if(this.auth.isAuthenticated()){
          this.auth.logout();
          console.log(this.auth);
          location.assign(location.origin + '/home' );
      }
  }
}
