import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProveedorService } from '../providers/proveedor.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage {
  actividad = {
    nombre:null,
    descripcion:null,
    lugar:null,
    fecha: null,
    duracion: "",
    imagen: null,
    finalizada: false
  };

  id = null;

  categorias = []

  usuario = null;
  esSocio = null;
  accion="";
  color_button="dark";

  constructor(private rutaActiva: ActivatedRoute,  public proveedor:ProveedorService, public auth: AuthenticationService){
    this.rutaActiva.snapshot.params;
    this.id =  this.rutaActiva.snapshot.params.id;
    this.id=parseInt(this.id);
    this.ionViewDidLoad();
  }

  inicializarUsuario() {
      if(!this.auth.isAuthenticated() && location.pathname != '' && location.pathname != '/inicio') {
          console.log("Auth failed");
          location.assign(location.origin);
      }
      else{
        this.proveedor.esSocio(this.auth.auth).subscribe(
          (data) => {
            if(data.length>0){
              this.esSocio=true;
              this.usuario = data[0].id;
            }
          },
          error => {
              console.log(<any>error);
          }
        )
        this.proveedor.esVoluntario(this.auth.auth).subscribe(
          (data) => {
            if(data.length>0){
              this.esSocio=false;
              this.usuario = data[0].id;
            }
          },
          error => {
              console.log(<any>error);
          }
        )

      }
  }

  async ionViewDidLoad(){
    this.inicializarUsuario();

    while(this.usuario==null){
      await new Promise(r => setTimeout(r, 1000));
    }

    this.proveedor.obtenerActividad(this.id).subscribe(
      (data) => {
        console.log(data[0]);
        this.actividad.nombre = data[0].nombre;
        this.actividad.descripcion = data[0].descripcion;
        this.actividad.lugar = data[0].lugar;
        this.actividad.fecha = data[0].fecha;
        let duracion = data[0].duracion;
        this.actividad.imagen = data[0].imagen;

        let dateTime = this.actividad.fecha;
        let parts= dateTime.split(/[- :TZ]/);
        this.actividad.fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];

        let hora = Math.floor(duracion/60);
        let minutos = duracion - hora*60;

        if(hora!=0){
            this.actividad.duracion += hora + " horas ";
            if(minutos!=0){
              this.actividad.duracion += "y " + minutos + " minutos";
            }
        }
        else if(minutos!=0)
          this.actividad.duracion += minutos + " minutos";
      
      
        let fecha = new Date(parts[0], parts[1]-1, parts[2], parts[3], parts[4]);
        let actual = new Date();
        this.actividad.finalizada = actual.getTime() > fecha.getTime();
      },
      error => {
          console.log(<any>error);
      }
    )

    this.proveedor.obtenerCategoriasActividad(this.id).subscribe(
      (data) => {
        this.categorias=data;
      },
      error => {
        console.log(<any>error);
      }
    )
    
    this.actualizar();

  }


  actualizar(){
    this.proveedor.apuntadoActividad(this.usuario, this.id, this.esSocio).subscribe(
      (data) => {
        if(data[0]!=undefined){
          if(this.actividad.finalizada){
            this.accion="Valorar";
            this.color_button="danger";
          }else{
            this.accion="Desapuntar";
            this.color_button="danger";
          }
        }else{
          this.accion="Apuntar";  
          this.color_button="dark"; 
        }   
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  realizarAccion(){
    let postData ={
      idParticipante: this.usuario,
      idActividad: this.id
    };

    if(this.accion=="Apuntar"){
      this.proveedor.apuntarse(postData, this.esSocio).subscribe(
        (res) => { 
          postData = res['results'];
          this.actualizar();
        },
        error =>{
          console.error(error);
        }
      )
    }else if(this.accion=="Desapuntar"){
      this.proveedor.desapuntarse(postData, this.esSocio).subscribe(
        (res) => {
          postData = res['results'];
          this.actualizar();
        },
        error =>{
          console.error(error);
        }
      )
    }else{
      location.href ="/valoracion";
    }
  }

}