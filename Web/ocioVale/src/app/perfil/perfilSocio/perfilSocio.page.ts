import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../../providers/proveedor.service';

@Component({
  selector: 'app-perfilSocio',
  templateUrl: 'perfilSocio.page.html',
  styleUrls: ['perfilSocio.page.scss'],
})
export class perfilSocio implements OnInit {
  private perfilSocio : FormGroup;

  datos = [ ];

  familiar=[

  ];
  
  perfil = {
    "id" : '',
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

  /*familiar = {
    "id" : ''
  };*/

  constructor(public proveedor:ProveedorService) { 
    this.cargaSocios();
    //this.cargaFamiliar();
  }

  cargaSocios(){

    this.proveedor.obtenerSocios().subscribe(
      (data) => {
        this.datos = data;

        for(var i=0; i<this.datos.length; i++){    
          this.perfil.id = this.datos[i].id;
          this.perfil.nombre_usuario = this.datos[i].username;
          //this.perfil.pass = this.datos[i].password;
          this.perfil.nombre = this.datos[i].nombre;
          this.perfil.apellidos = this.datos[i].apellidos;
          this.perfil.mail = this.datos[i].email;
          this.perfil.fecha_nac = this.datos[i].fecha_nacimiento;
          this.perfil.telf = this.datos[i].telefono;
          this.perfil.localidad = this.datos[i].localidad;
          this.perfil.provincia = this.datos[i].provincia;
          this.perfil.descripcion = this.datos[i].descripcion;


          // para cada socio, cojo el familiar segun su id
          this.proveedor.obtenerFamiliar(this.perfil[i].id).subscribe(
            (query_part) => {
              this.familiar = query_part; 
            }
          )
        }
      },
      error => {
          console.log(<any>error);
      }
    ) 
  }

  /*cargaFamiliar(){

    this.proveedor.obtenerFamiliar().subscribe(
      (data) => {
        this.datos = data;

        for(var i=0; i<this.datos.length; i++)    
          this.familiar.id = this.datos[i].idFamiliar;
      },
      error => {
          console.log(<any>error);
      }
    ) 
  }*/

  ngOnInit() {
  }

}