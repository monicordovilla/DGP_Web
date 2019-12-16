import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: 'header.page.html',
  styleUrls: ['header.page.scss'],
})
export class HeaderPage implements OnInit {


  constructor(public auth: AuthenticationService) {}

  ngOnInit() {
      console.log(this.auth);
      console.log(location.pathname);
      if(!this.auth.isAuthenticated() && location.pathname != '' && location.pathname != '/home') {
          console.log("Auth failed");
          //location.assign(location.origin);
      }
  }

}
