import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../../providers/proveedor.service';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.page.html',
  styleUrls: ['./crear-actividad.page.scss'],
})
export class CrearActividadPage implements OnInit {
  private creacionActividad : FormGroup;

  categorias =[
  ];

  actividad = {
  };

  constructor(public proveedor:ProveedorService) {
    this.cargaCategorias();
  }

  cargaCategorias(){
    let nombre;
    this.proveedor.obtenerCategorias().subscribe(
      (data) => {
        this.categorias = data;

        for(var i=0; i<this.categorias.length; i++){
          nombre = this.categorias[i].nombre;
        }
      }
    )
  }

  crearActividad(){
    console.log("crear actividad");
    this.proveedor.enviarActividad(this.actividad);
  }

  ngOnInit() {
  }

}
