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
    this.obtenerParticipantes();
  }

  actividad = {
    "nombre" : '',
    "lugar" : '',
    "duracion" : 0,
    "descripción": '',
    "fecha" : '',
    "id" : this.id,
    "categorias": ''
  };

  categorias=[

  ];

  categoriasActividad=[

  ];

  fecha= '';
  hora= '';
  voluntarios = 1;
  socios = 1;
  imagen = "http://www.arasaac.org/repositorio/thumbs/10/200/3/30387.png"

  ngOnInit(){

  }

  cargaActividad(){
    let dateTime;
    let parts;

    this.proveedor.obtenerActividad(this.id).subscribe(
      (data) => {
        this.actividad = data[0];
        this.cargaCategoriasDeActividad(this.id);
        this.voluntarios = data[1];
        this.socios = data[2];

        dateTime = this.actividad.fecha;
        parts= dateTime.split(/[- :TZ]/);
        this.fecha = parts[0] + "-" + parts[1] + "-" + parts[2];
        this.hora = parts[3] + ":" + parts[4];
        this.actividad.fecha = this.fecha + " " + this.hora;
      },
      error => {
          console.log(<any>error);
      }
    )
  }

  obtenerParticipantes(){
    this.proveedor.obtenerMaxParticipantes(this.id).subscribe(
      (data) => {

        console.log(data);
        if( data.length > 0 ){
          this.voluntarios = data[0].max_voluntarios;
          this.socios = data[0].max_socios;
        }
        else{
          this.voluntarios = 1;
          this.socios = 1;
        }
      },
      error => {
          console.log(<any>error);
      }
    )
  }

  cargaCategorias(){
    this.proveedor.obtenerCategorias().subscribe(
      (data) => {
        this.categorias = data;
      },
      error => {
          console.log(<any>error);
      }
    )
  }

  cargaCategoriasDeActividad(id){
    this.proveedor.obtenerCategoriasDeActividad(id).subscribe(
      (data) => {
        console.log(data);
        this.categoriasActividad = data;
        console.log(this.actividad);
       // this.actividad.categorias = [];

        var cat;
        for(cat of this.categoriasActividad) {
            console.log(cat.nombre);
           // this.actividad.categorias.push(cat.id.toString());
        }
        console.log(this.actividad);
      },
      error => {
          console.log(<any>error);
      }
    )
  }

  modificarActividad(){

    console.log(this.actividad);
    console.log(this.actividad.duracion);
    this.proveedor.modificarActividad(this.actividad).subscribe(
      (res) =>{
        console.log(res);
      },
      error =>{
        console.error(error);
      }
    );
    //location.reload();
  }

  eliminarActividad(){
    this.proveedor.eliminarActividad(this.id).subscribe(
      (res) =>{
        location.assign(location.origin + '/actividades' );
        console.log(res);
      },
      error =>{
        console.error(error);
      }
    );
  }

}
