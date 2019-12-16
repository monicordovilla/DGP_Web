import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/providers/proveedor.service';

@Component({
  selector: 'app-actividad',
  templateUrl: 'actividad.page.html',
  styleUrls: ['actividad.page.scss'],
})
export class actividad implements OnInit {
  id = null;

  constructor(private activeRoute: ActivatedRoute, public proveedor:ProveedorService) {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.cargaActividad();
    this.cargaCategorias();
  }

  actividad = {
    "fecha" : '',
    "id" : this.id,
  };

  categorias=[];

  fecha= '';
  hora= '';
  voluntarios = 1;
  socios = 1;

  ngOnInit(){
    
  }


  cargaActividad(){
    let dateTime;
    let parts;

    this.proveedor.obtenerActividad(this.id).subscribe(
      (data) => {
        console.log(data);
        this.actividad = data[0];
        this.voluntarios = data[1];
        this.socios = data[2];

        dateTime = this.actividad.fecha;
        parts= dateTime.split(/[- :TZ]/);
        this.fecha = parts[2] + "-" + parts[1] + "-" + parts[0];
        this.hora = parts[3] + ":" + parts[4];          
      },
      error => {
          console.log(<any>error);
      }
    ) 
  }

  cargaCategorias(){
    this.proveedor.obtenerCategoriasDeActividad(this.id).subscribe(
      (data) => {
        console.log(data);
        this.categorias = data;
      },
      error => {
          console.log(<any>error);
      }
    )
  }

  eliminarActividad(){
    this.proveedor.eliminarActividad(this.id).subscribe(
      (res) =>{
        console.log(res);
      },
      error =>{
        console.error(error);
      }
    );
  }

}
