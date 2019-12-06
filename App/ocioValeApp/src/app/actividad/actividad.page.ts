import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {
  actividad = {
    "nombreActividad": "Patinaje", 
    "descripcion": "ejemplo de actividad con procedure",
    "lugar": "Granada",
    "fecha":"2019-12-12 17:30",
    "duracion": 350
  }

  duracion = ""

  categorias = [
    {
      "id": 1,
      "imagen": "http://www.arasaac.org/repositorio/thumbs/10/200/3/30387.png"
    },
    {
      "id": 1,
      "imagen": "http://www.arasaac.org/repositorio/thumbs/10/200/3/30387.png"
    }
  ];

  constructor(private rutaActiva: ActivatedRoute) {
    this.rutaActiva.snapshot.params

    let dateTime = this.actividad.fecha;
    let parts= dateTime.split(/[- :TZ]/);
    this.actividad.fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];

    let duracion=this.actividad.duracion;
    let hora = Math.floor(duracion/60);
    let minutos = duracion - hora*60;

    if(hora!=0){
        this.duracion += hora + " horas ";
        if(minutos!=0){
          this.duracion += "y " + minutos + " minutos";
        }
    }
    else if(minutos!=0)
      this.duracion += minutos + " minutos";
  }

  ngOnInit() {
    var id =  this.rutaActiva.snapshot.params.id
    console.log("NUMERO: " + id);
  }

}
