import { Component} from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-header',
  templateUrl: 'header.page.html',
  styleUrls: ['header.page.scss']

})
export class HeaderPage {
  constructor(private menuCtrls: MenuController) {
  }

  toggleMenu(){
    if(this.menuCtrls.isOpen){
      this.menuCtrls.toggle();
      document.getElementById("menu").style.display ='none';
    }
    else{
      document.getElementById("menu").style.display ='block';
      this.menuCtrls.toggle();
    }
  }
}
