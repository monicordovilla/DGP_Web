import { Component } from '@angular/core';
import {ProveedorService} from '../providers/proveedor.service';

@Component({
  selector: 'actividades',
  templateUrl: 'actividades.page.html',
  styleUrls: ['actividades.page.scss'],
})
export class Actividades {

  actividades=[];

  categorias=[
    [
      {
        "id": 0,
        "imagen": "http://www.arasaac.org/repositorio/thumbs/10/200/3/30598.png"
      },
      {
        "id": 0,
        "imagen": "http://www.arasaac.org/repositorio/thumbs/10/200/2/24671.png"
      }
    ]
  ];

  constructor() {
    this.cargaActividades();
  }

  cargaActividades(){
    let dateTime;
    let parts;

    this.proveedor.obtenerActividades().subscribe(
      (data) => {
        this.actividades = data;

        for(var i=0; i<this.actividades.length; i++){
          dateTime = this.actividades[i].fecha;
          parts= dateTime.split(/[- :TZ]/);
          this.actividades[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];
          this.categorias.push([
            {
              "id": 1,
              "imagen": "http://www.arasaac.org/repositorio/thumbs/10/200/3/30387.png"
            }
          ]);
        }
      },
      error => {
          console.log(<any>error);
      }
    )
  }

}
