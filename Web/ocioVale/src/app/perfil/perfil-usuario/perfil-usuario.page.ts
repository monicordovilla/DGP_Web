import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/providers/proveedor.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  mostrarSocio=false;
  mostrarVoluntario = false;
  mostrarFamiliar = false;

  rol = '';
  id = "";

  constructor(private activeRoute: ActivatedRoute, public proveedor:ProveedorService) {
  
  }
  
  usuario = {
    "nombre" : '',
    "apellidos" : '',
    "username" : '',
    "id" : '',
    "idPersona" : '',
  };

  familiar = {
    "nombre" : '',
    "apellidos" : '',
    "username" : '',
    "id" : '',
    "idPersona" : '',
  };

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");

    //console.log(this.id);

    if(this.proveedor.esSocio(this.usuario.username) != null){
      this.mostrarSocio=true;
      this.rol = 'socio';
      this.cargaSocio();
    }
    else if(this.proveedor.esFamiliar(this.usuario.username) != null){
      this.rol = 'familiar de un socio';
      this.mostrarFamiliar = true;
      this.cargaUsuario();
    }
    else if(this.proveedor.esVoluntario(this.usuario.username) != null){
      this.rol = 'voluntario';
      this.mostrarVoluntario = true;
      this.cargaVoluntario();
    }
    else if(this.proveedor.esGestor(this.usuario.username) != null){
      this.rol = 'gestor';
      this.cargaGestor();
    }
  }

  cargaUsuario(){
    
    let nombre;
    let apellidos;
    let nombreUsuario;
    let valoracionMedia;


    this.proveedor.obtenerUsuario(this.id).subscribe(
      (data) => {
        console.log(data);
        this.usuario = data[0];
        console.log(this.usuario);
        
        nombre = this.usuario.nombre;
        apellidos = this.usuario.apellidos;
        nombreUsuario = "@" + this.usuario.username;

        // para cada socio, cojo el familiar segun su id
        this.proveedor.obtenerFamiliar(this.usuario.id).subscribe(
        (query_part) => {
          this.familiar = query_part;
          console.log(this.familiar);
          }
        )
      },
      (error) => {
          console.log(<any>error);
      }
    ) 


  }

  cargaVoluntario(){
    
    let nombre;
    let apellidos;
    let nombreUsuario;
    let valoracionMedia;


    this.proveedor.obtenerVoluntario(this.id).subscribe(
      (data) => {
        console.log(data);
        this.usuario = data[0];
        console.log(this.usuario);
        
        nombre = this.usuario.nombre;
        apellidos = this.usuario.apellidos;
        nombreUsuario = "@" + this.usuario.username;

        /*/ para cada socio, cojo el familiar segun su id
        this.proveedor.obtenerFamiliar(this.usuario.id).subscribe(
        (query_part) => {
          this.familiar = query_part;
          console.log(this.familiar);
          }
        )*/
      },
      (error) => {
          console.log(<any>error);
      }
    ) 


  }

  cargaSocio(){
    
    let nombre;
    let apellidos;
    let nombreUsuario;
    let valoracionMedia;


    this.proveedor.obtenerSocio(this.id).subscribe(
      (data) => {
        console.log(data);
        this.usuario = data[0];
        console.log(this.usuario);
        
        nombre = this.usuario.nombre;
        apellidos = this.usuario.apellidos;
        nombreUsuario = "@" + this.usuario.username;

        /*/ para cada socio, cojo el familiar segun su id
        this.proveedor.obtenerFamiliar(this.usuario.id).subscribe(
        (query_part) => {
          this.familiar = query_part;
          console.log(this.familiar);
          }
        )*/
      },
      (error) => {
          console.log(<any>error);
      }
    ) 


  }

  cargaGestor(){
    
    let nombre;
    let apellidos;
    let nombreUsuario;
    let valoracionMedia;


    this.proveedor.obtenerUsuario(this.id).subscribe(
      (data) => {
        console.log(data);
        this.usuario = data[0];
        console.log(this.usuario);
        
        nombre = this.usuario.nombre;
        apellidos = this.usuario.apellidos;
        nombreUsuario = "@" + this.usuario.username;

        // para cada socio, cojo el familiar segun su id
        this.proveedor.obtenerFamiliar(this.usuario.id).subscribe(
        (query_part) => {
          this.familiar = query_part;
          console.log(this.familiar);
          }
        )
      },
      (error) => {
          console.log(<any>error);
      }
    ) 


  }

}//fin class
