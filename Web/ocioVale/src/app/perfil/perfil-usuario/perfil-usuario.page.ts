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
  mostrarValoracion = false;
  censurado = false;
  descripcionPrivada = '';

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
    "fecha_nacimiento" : ''
  };

  familiares = [ ];

  valoraciones = [ ];

  ngOnInit() {}
  verRol(username) {
    this.proveedor.esSocio(username).subscribe(
      (data) => {
        if(data.length > 0){
          this.rol = 'socio';
          //console.log(this.rol);
          this.mostrarSocio = true;

          this.proveedor.obtenerDescripcionPrivada(this.id).subscribe(
            (data) => {
              this.descripcionPrivada = data[0].descripcionPrivada;
            },
            (error) => {
              console.error(error);
            }
          )

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
          //console.log(this.rol);

          let idfam;
          //obtiene el id del socio
          this.proveedor.obtenerSocioDeFamiliar(this.id).subscribe(
            (data) => {
              if(data.length == 0) console.log("no tiene socio asociado ");
              else{
                for(var i=0; i<data.length; i++){
                  this.mostrarBotonFamiliar = true;
                  idfam = data[i].idPersona;
                
                  //saca la información del socio
                  this.proveedor.obtenerUsuario(idfam).subscribe(
                    (data) => {
                      this.familiares.push(data[0]);
                    },
                    (error) =>{
                      console.error(error);
                    }
                  );
                }
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
          this.mostrarVoluntario = true;

          this.cargaValoracion(this.id);

          this.proveedor.obtenerCensurados(this.id).subscribe(
            (data) => {
              if(data[0].censurado == "1") this.censurado = true;
            },
            (error) => {
              console.error(error);
            }
          )
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );

    this.proveedor.esGestor(username).subscribe(
      (data) => {
        if(data.length > 0){
          this.rol = 'gestor';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  cargarActividad(i, idActividad){
    //obtener informacion de actividad necesaria
    this.proveedor.obtenerActividad(idActividad).subscribe(
      (data) => {
        this.valoraciones[i].nombre = data[0].nombre;
        this.valoraciones[i].imagen = data[0].imagen;
      },
      error => {
          console.log(<any>error);
      }
    )
  }

  cargaValoracion(id){
    this.proveedor.obtenerValoracion(id).subscribe(
      (data) => {
        for(var i=0; i<data.length; i++){
          console.log(data[i]);
          this.valoraciones[i] = data[i];
          
          this.cargarActividad(i, data[i].idActividad);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  };

  cargaUsuario(){
    
    let nombre;
    let apellidos;
    let nombreUsuario;
    let valoracionMedia;
    let fechanacimiento;
    let dateTime;
    let parts;


    this.proveedor.obtenerUsuario(this.id).subscribe(
      (data) => {
        //console.log(data);
        this.usuario = data[0];
        //console.log(this.usuario);
        
        nombre = this.usuario.nombre;
        apellidos = this.usuario.apellidos;
        nombreUsuario = "@" + this.usuario.username;
        this.verRol(this.usuario.username);

        dateTime = this.usuario.fecha_nacimiento;
        parts= dateTime.split(/[- :TZ]/);
        fechanacimiento = parts[0] + "-" + parts[1] + "-" + parts[2] + " " + parts[3] + ":" + parts[4];
        this.usuario.fecha_nacimiento = fechanacimiento;
        //console.log(this.usuario.fecha_nacimiento);

      },
      (error) => {
          console.log(<any>error);
      }
    ) 

  }


  eliminarUsuario(){
    this.proveedor.eliminarUsuario(this.usuario.username).subscribe(
      data=>{
        location.assign(location.origin + '/usuarios' );
      },
      error =>{
        console.error(error);
      }
    );
  }

  modificarUsuario(){
    this.proveedor.modificarUsuario(this.usuario).subscribe( 
      error =>{
        //console.error(this.usuario);
        console.error(error);
      }
    );
    location.reload();
  }


  consultarFamiliar(){
    console.log("ver familiares");

    //muestra el familiar
    this.mostrarBoton = true;
  }

  consultarValoracion(){
    console.log("ver valoraciones");
    console.log(this.valoraciones);
    this.mostrarValoracion = true;
  }

  censurar(){
    this.proveedor.censurarVoluntario(this.id).subscribe(
      (data) => {
        //console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
    location.reload();
  }

  aprobar(){
    this.proveedor.aprobarVoluntario(this.id).subscribe(
      (data) => {
        //console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
    location.reload();
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
