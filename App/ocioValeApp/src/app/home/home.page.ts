import { Component } from '@angular/core';
import {ProveedorService} from '../providers/proveedor.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  actividades=[];
  categorias=[];

  constructor(public proveedor:ProveedorService){
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    let dateTime;
    let parts;
    this.proveedor.obtenerActividades().subscribe(
      (data) => {
        this.actividades = data;

        for(var i=0; i<this.actividades.length; i++){
          dateTime = this.actividades[i].fecha;
          parts= dateTime.split(/[- :TZ]/);
          this.actividades[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];

          this.proveedor.obtenerCategoriasActividad(this.actividades[i].id).subscribe(
            (data) => {
              this.categorias.push(data);
            })
        }
      },
      error => {
          console.log(<any>error);
      }
    )
    
  }

}