import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfilSocioFamiliar',
  templateUrl: 'perfilSocioFamiliar.page.html',
  styleUrls: ['perfilSocioFamiliar.page.scss'],
})
export class perfilSocioFamiliar implements OnInit{
  private perfilSocioFamiliar : FormGroup;

  perfil = {
    "nombre_usuario" : '',
    "contraseña" : '',
    "nombre" : '',
    "apellidos" : '',
    "mail" : '',
    "fecha_nac" : '',
    "telf" : '',
    "dni" : '',
    "localidad" : '',
    "provincia" : '',
    "nombre_familiar" : '',
    "apellidos_familiar" : ''
  };

  constructor() {}

  consultarPerfil(){
    //Obtener de BD
    //this.creacionActividad.value;
  }

  ngOnInit() {
  }

}
