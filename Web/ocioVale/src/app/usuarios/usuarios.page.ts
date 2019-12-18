import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../providers/proveedor.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss'],
})
export class Usuarios implements OnInit {
  valoracion = false;
  datos = [ ];

  users = [ ];

  usuario = [ ];

  perfil = {
    "valoracion" : ''
  };

  usuarioSeleccionado = {

  };
  idUsuarioSeleccionado;


  // 0 pagina usuarios, 1 gestor, 2 socio, 3 socio familiar y 4 voluntario
  mostrado = 0;

  filtroTipo(){
    this.mostrado = 0;

    var e = (document.getElementById("rol")) as HTMLSelectElement;
    var rol = (document.getElementById("rol")).innerHTML;
    //var sel = e.selectedIndex;
    //var opt = e.options[sel];
    //var CurValue = (<HTMLSelectElement>opt).value;
    //var CurText = (<HTMLSelectElement>opt).text;
    //console.log(rol);
    //console.log(opt);
    //console.log('valor del select'+ rol);
  }

  constructor(public proveedor:ProveedorService, private router: Router) {
    this.cargaUsuarios();
  }


  cargaValoracion(id){
    var suma = 0;
    var valoracionMedia = 0;

    this.proveedor.obtenerValoracion(id).subscribe(
      (data) => {
        this.datos = data;
        for(var i=0; i<this.datos.length; i++){
          suma = parseInt(this.datos[i].puntuacion) + suma;
          //console.log(suma);
        }
        if(this.datos.length > 0) valoracionMedia = suma/this.datos.length;

        //console.log("valoracion media: " + valoracionMedia);
      },
      error => {
          console.log(<any>error);
      }
    )

    return valoracionMedia;
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
          this.verRol(this.users[i].username, i);
          console.log(this.users[i].rol);
          nombre = this.users[i].nombre
          apellidos = this.users[i].apellidos;
          nombreUsuario = "@" + this.users[i].username;

          this.cargaValoracion(this.users[i].id);
          //console.log("valoracion: " + this.users[i].id);
        }
      },
      error => {
          console.log(<any>error);
      }
    )

  }

  ngOnInit() {
  }

  verRol(username, i) {
    var rol;

    this.proveedor.esSocio(username).subscribe(
      (data) => {
        if(data.length > 0){
          console.log("es gestor");
          rol = 'socio';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );

    this.proveedor.esFamiliar(username).subscribe(
      (data) => {
        if(data.length > 0){
          console.log("es gestor");
          rol = 'familiar de un socio';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );

    this.proveedor.esVoluntario(username).subscribe(
      (data) => {
        if(data.length > 0){
          console.log("es gestor");
          rol = 'voluntario';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );

    this.proveedor.esGestor(username).subscribe(
      (data) => {
        if(data.length > 0){
          console.log("es gestor");
          rol = 'gestor';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );


    /*this.users[i].rol = this.verRol(this.users[i].username, i);
          console.log("usuario: " + this.users[i].username);
          console.log(this.verRol(this.users[i].username));*/
    console.log(rol);
    return rol;
  }

}
