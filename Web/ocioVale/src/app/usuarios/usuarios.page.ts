import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss'],
})
export class Usuarios implements OnInit {
  private usuarios : FormGroup;

  //Modificar
  /*usuario = {
    "nombre_usuario" : '',
    "contraseña" : '',
    "nombre" : '',
    "apellidos" : '',
    "mail" : '',
    "fecha_nac" : '',
    "telf" : '',
    "localidad" : '',
    "provincia" : '',
    "descripcion" : ''
  };*/

  constructor() {}

  //Modificar
  /*consultarPerfil(){
    //Obtener de BD
    //this.creacionActividad.value;
  }*/

  ngOnInit() {
  }

}
