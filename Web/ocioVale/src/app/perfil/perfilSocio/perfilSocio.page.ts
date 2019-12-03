import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfilSocio',
  templateUrl: 'perfilSocio.page.html',
  styleUrls: ['perfilSocio.page.scss'],
})
export class perfilSocio implements OnInit {
  private perfilSocio : FormGroup;

  perfil = {
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
  };

  constructor() { }

  consultarPerfil(){
    //Obtener de BD
    //this.creacionActividad.value;
  }

  ngOnInit() {
  }

}
