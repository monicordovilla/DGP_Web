import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../../providers/proveedor.service';

@Component({
  selector: 'app-perfilSocioFamiliar',
  templateUrl: 'perfilSocioFamiliar.page.html',
  styleUrls: ['perfilSocioFamiliar.page.scss'],
})
export class perfilSocioFamiliar implements OnInit{
  private perfilSocioFamiliar : FormGroup;

  datos = [ ];

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

  constructor(public proveedor:ProveedorService) {
    this.cargaFamiliares();
  }

  cargaFamiliares(){

    this.proveedor.obtenerFamiliares().subscribe(
      (data) => {
        this.datos = data;

        for(var i=0; i<this.datos.length; i++){          
          this.perfil.nombre_usuario = this.datos[i].username;
          //this.perfil.pass = this.datos[i].password;
          this.perfil.nombre = this.datos[i].nombre;
          this.perfil.apellidos = this.datos[i].apellidos;
          this.perfil.mail = this.datos[i].email;
          this.perfil.fecha_nac = this.datos[i].fecha_nacimiento;
          this.perfil.telf = this.datos[i].telefono;
          this.perfil.localidad = this.datos[i].localidad;
          this.perfil.provincia = this.datos[i].provincia;
          this.perfil.dni = this.datos[i].dni;
          this.perfil.nombre_familiar = this.datos[i].dni;
          this.perfil.apellidos_familiar = this.datos[i].dni;
        }
      },
      error => {
          console.log(<any>error);
      }
    ) 
  }

  ngOnInit() {
  }

}
