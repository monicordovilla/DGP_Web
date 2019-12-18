import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: 'header.page.html',
  styleUrls: ['header.page.scss']

})
export class HeaderPage implements OnInit {
  constructor(private menuCtrls: MenuController, public auth: AuthenticationService) {
  }

  ngOnInit() {
      console.log(this.auth);
      console.log(location.pathname);
      if(!this.auth.isAuthenticated() && location.pathname != '' && location.pathname != '/inicio') {
          console.log("Auth failed");
          location.assign(location.origin);
      }
  }

  toggleMenu(){
      this.menuCtrls.toggle();
  }
}
