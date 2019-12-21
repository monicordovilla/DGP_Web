import { Component } from '@angular/core';
import {ProveedorService} from '../providers/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'actividades',
  templateUrl: 'actividades.page.html',
  styleUrls: ['actividades.page.scss'],
})
export class Actividades {

  actividades=[

  ];

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

  participantes=[

  ];

  constructor(public proveedor:ProveedorService, private router: Router) {
    this.cargaActividades();
  }

  irActividad(id){
      this.router.navigate(["/actividad/"+id]);
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
          this.participantesActividad(i);
        }
      },
      error => {
          console.log(<any>error);
      }
    ) 
  }

  participantesActividad(i){
    // para cada actividad, cojo los participantes segun su id
    this.proveedor.obtenerParticipantes(this.actividades[i].id).subscribe(
      (data) => {
        //console.log("participante de actividad " + this.actividades[i].id + ": ");
        //console.log(data);
        if(data.length > 0){
          for(var j=0; j<data.length; j++){
            this.participantes.push(data[j]);
            this.infoParticipantes(this.participantes.length-1);
          }
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  infoParticipantes(i){
      //dado el id, cojo la info de los usuarios y los meto en un array
      this.proveedor.obtenerUsuario(this.participantes[i].idPersona).subscribe(
        (data) => {
          this.participantes[i].nombre = data[0].nombre;
          this.participantes[i].apellidos = data[0].apellidos; 
        },
        (error) => {
          console.log(error);
        }
      )
  }

  cancelarActividad(id: String){
    this.proveedor.eliminarActividad(id).subscribe(
      (res) =>{
        console.log(res);
        location.reload();
      },
      error =>{
        console.error(error);
      }
    );
  }

}
