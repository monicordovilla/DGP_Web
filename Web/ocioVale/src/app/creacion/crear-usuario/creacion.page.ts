import { Component } from '@angular/core';

@Component({
  selector: 'app-creacion',
  templateUrl: 'creacion.page.html',
  styleUrls: ['creacion.page.scss'],
})
export class CrearPage {
  mostrar=false;

  constructor() {}

  f(){
    this.mostrar = true;

    var e = (document.getElementById("rol")) as HTMLSelectElement;
    var rol = (document.getElementById("rol")).innerHTML;
    //var sel = e.selectedIndex;
    //var opt = e.options[sel];
    //var CurValue = (<HTMLSelectElement>opt).value;
    //var CurText = (<HTMLSelectElement>opt).text;
    console.log(rol);
    //console.log(opt);


    console.log('valor del select'+this.rol);
  }

}
