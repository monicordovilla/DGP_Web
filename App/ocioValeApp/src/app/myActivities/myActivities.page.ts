import { Component } from '@angular/core';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-myActivities',
  templateUrl: 'myActivities.page.html',
  styleUrls: ['myActivities.page.scss']
})
export class myActivitiesPage {
  constructor(){
    
  }
  
  desplegar(tipo:string) {
    document.getElementById(tipo).classList.toggle(tipo);
  }
}
