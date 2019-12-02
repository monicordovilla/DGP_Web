import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.page.html',
  styleUrls: ['./crear-actividad.page.scss'],
})
export class CrearActividadPage implements OnInit {
  private creacionActividad : FormGroup;

  categorias =[ 
    {
    id: 2,
    nombre:"Deporte"
    },
    {
      id: 45,
    nombre:"Musica"
    },
    {
      id: 58,
    nombre:"VALE"
    }
  ]

  actividad = {
    nombre : '',
    categoría : '',
    descripcion : '',
    lugar : '',
    fecha : '',
    hora : '',
    duracion : '',
    max_socios : 1,
    max_voluntarios : 1
  };

  constructor() { }

  crearActividad(){
    //Introducir en BD
    //this.creacionActividad.value;
  }

  ngOnInit() {
  }

}
