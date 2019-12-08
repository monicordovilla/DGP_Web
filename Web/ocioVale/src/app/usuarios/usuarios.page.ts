import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../providers/proveedor.service';

@Component({
  selector: 'usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss'],
})
export class Usuarios implements OnInit {
  private usuarios : FormGroup;

  datos = [ ];

  users = [ ];

  perfil = {
    "valoracion" : ''
  };

  constructor(public proveedor:ProveedorService) {
    this.cargaValoracion();
    this.cargaUsuarios();
  }

  cargaValoracion(){

    this.proveedor.obtenerValoracion().subscribe(
      (data) => {
        this.datos = data;

        for(var i=0; i<this.datos.length; i++){          
          this.perfil.valoracion = this.datos[i].puntuacion;
        }
      },
      error => {
          console.log(<any>error);
      }
    ) 
  }

  cargaUsuarios(){
    
    let nombre;
    let apellidos;
    let nombreUsuario;
    let valoracionMedia;


    this.proveedor.obtenerUsuarios().subscribe(
      (data) => {
        this.users = data;

        for(var i=0; i<this.users.length; i++){
          nombre = this.users[i].nombre;
          apellidos = this.users[i].apellidos;
          nombreUsuario = "@" + this.users[i].username;
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
