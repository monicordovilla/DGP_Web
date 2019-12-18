import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menuCtrls: MenuController, private auth: AuthenticationService) {
  }

  ngOnInit() {}

  toggleMenu(){
      this.menuCtrls.toggle();
  }

  logout(){
      this.auth.logout();
      console.log(this.auth);
  }
}
