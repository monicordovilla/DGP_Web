import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../providers/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss'],
})
export class Usuarios implements OnInit {

  datos = [ ];

  users = [ ];

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
    console.log('valor del select'+ rol);
  }

  constructor(public proveedor:ProveedorService, private router: Router) {
    this.cargaValoracion();
    this.cargaUsuarios();
  }

  irPerfilUsuario(username){

    if(this.proveedor.esSocio(username) != null){
      this.router.navigate(['/perfilSocio', username]);
    }
    if(this.proveedor.esFamiliar(username) != null){
      this.router.navigate(['/perfilSocioFamiliar', username]);
    }
    if(this.proveedor.esVoluntario(username) != null){
      this.router.navigate(['/perfilVoluntario', username]);
    }
    if(this.proveedor.esGestor(username) != null){
      this.router.navigate(['/perfilGestor', username]);
    }
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
