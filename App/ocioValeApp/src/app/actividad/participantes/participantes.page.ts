import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/providers/proveedor.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.page.html',
  styleUrls: ['./participantes.page.scss'],
})
export class ParticipantesPage{
  
  actividad;
  participantes = [];

  id=null;

  constructor(private rutaActiva: ActivatedRoute,  public proveedor:ProveedorService){
    this.rutaActiva.snapshot.params
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.id =  this.rutaActiva.snapshot.params.id;
    this.proveedor.obtenerActividad(this.id).subscribe(
      (data) => {
        this.actividad = data[0].nombre;
      },error => {
          console.log(<any>error);
      }
    )

    this.proveedor.obtenerParticipantes(this.id).subscribe(
      (data) => {
        this.participantes=data;
      },error => {
          console.log(<any>error);
      }
    )
  }
}
