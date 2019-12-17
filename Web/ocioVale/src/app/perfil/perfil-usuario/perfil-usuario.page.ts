import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/providers/proveedor.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  mostrarSocio = false;
  mostrarBotonFamiliar = false;
  mostrarVoluntario = false;
  mostrarFamiliar = false;
  mostrar = false;
  mostrarBoton = false;

  rol = '';
  id = "";

  constructor(private activeRoute: ActivatedRoute, public proveedor:ProveedorService) {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
    this.cargaUsuario();
  }
  
  usuario = {
    "nombre" : '',
    "apellidos" : '',
    "username" : '',
    "id" : '',
    "idPersona" : '',
  };

  familiares = [ ];

  ngOnInit() {}
  verRol(username) {

    console.log("ver rol");
    console.log(username);
    this.proveedor.esSocio(username).subscribe(
      (data) => {
        if(data.length > 0){
          this.rol = 'socio';
          console.log(this.rol);
          this.mostrarSocio = true;

          let idfam;
          //obtiene el id del familiar
          this.proveedor.obtenerFamiliarSocio(this.id).subscribe(
            (data) => {
              if(data.length == 0) console.log("no tiene familiar asociado ");
              else{
                this.mostrarBotonFamiliar = true;
                idfam = data[0].idPersona;
                
                //saca la información del familiar
                this.proveedor.obtenerUsuario(idfam).subscribe(
                  (data) => {
                    this.familiares = data;
                  },
                  (error) =>{
                    console.error(error);
                  }
                );
              }
            },
            (error) =>{
              console.error(error);
            }
          );

        }
      },
      (error) => {
        console.log(<any>error);
      }
    );

    this.proveedor.esFamiliar(username).subscribe(
      (data) => {
        if(data.length > 0){          
          this.rol = 'familiar de un socio';
          this.mostrarFamiliar = true;
          console.log(this.rol);

          let idfam;
          //obtiene el id del socio
          this.proveedor.obtenerSocioDeFamiliar(this.id).subscribe(
            (data) => {
              if(data.length == 0) console.log("no tiene socio asociado ");
              else{
                this.mostrarBotonFamiliar = true;
                idfam = data[0].idPersona;
                console.log("data " + data);
                console.log("familiar " + idfam);
                
                //saca la información del socio
                this.proveedor.obtenerUsuario(idfam).subscribe(
                  (data) => {
                    this.familiares = data;
                    console.log(data);
                  },
                  (error) =>{
                    console.error(error);
                  }
                );
              }
            },
            (error) =>{
              console.error(error);
            }
          );



        }
      },
      (error) => {
        console.log(<any>error);
      }
    );

    this.proveedor.esVoluntario(username).subscribe(
      (data) => {
        if(data.length > 0){
          this.rol = 'voluntario';
          this.mostrarVoluntario = true;
          console.log(this.rol);
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );

    this.proveedor.esGestor(username).subscribe(
      (data) => {
        console.log(data);
        console.log("ver si es gestor " + data.length);
        if(data.length > 0){
          this.rol = 'gestor';
          console.log(this.rol);
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  cargaUsuario(){
    
    let nombre;
    let apellidos;
    let nombreUsuario;
    let valoracionMedia;


    this.proveedor.obtenerUsuario(this.id).subscribe(
      (data) => {
        //console.log(data);
        this.usuario = data[0];
        //console.log(this.usuario);
        
        nombre = this.usuario.nombre;
        apellidos = this.usuario.apellidos;
        nombreUsuario = "@" + this.usuario.username;
        this.verRol(this.usuario.username);
      },
      (error) => {
          console.log(<any>error);
      }
    ) 

  }


  eliminarUsuario(){
    this.proveedor.eliminarUsuario(this.usuario.username).subscribe(
      
      error =>{
        console.error(error);
      }
    );
  }

  modificarUsuario(){
    this.proveedor.modificarUsuario(this.usuario).subscribe( 
      
      error =>{
        console.error(this.usuario);
        console.error(error);
      }
    );
  }


  consultarFamiliar(){
    let id;
    console.log("ver familiares");

    //muestra el familiar
    this.mostrarBoton = true;
  }









/*
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

        //para cada socio, cojo el familiar segun su id
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

         para cada socio, cojo el familiar segun su id
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


  }*/

}//fin class
