import { Component } from '@angular/core';
import { HeaderPage } from '../header/header.page';
import { ProveedorService } from '../providers/proveedor.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-myActivities',
  templateUrl: 'myActivities.page.html',
  styleUrls: ['myActivities.page.scss']
})
export class myActivitiesPage {

  actividadesRealizadas=[];
  actividadesProximas=[];
  categoriasProximas=[];
  categoriasRealizadas=[];


  usuario=null;
  esSocio=null;

  constructor(public proveedor:ProveedorService, public auth: AuthenticationService){
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

    let dateTime;
    let parts;
    this.proveedor.misActividadesRealizadas(this.usuario, this.esSocio).subscribe(
      (data) => {
        this.actividadesRealizadas = data;

        for(var i=0; i<this.actividadesRealizadas.length; i++){
          dateTime = this.actividadesRealizadas[i].fecha;
          parts= dateTime.split(/[- :TZ]/);
          this.actividadesRealizadas[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];

          this.proveedor.obtenerCategoriasActividad(this.actividadesRealizadas[i].id).subscribe(
            (data) => {
              this.categoriasRealizadas.push(data);
            })
        }
      },
      error => {
          console.log(<any>error);
      }
    )

    this.proveedor.misActividadesProximas(this.usuario, this.esSocio).subscribe(
      (data) => {
        this.actividadesProximas = data;
        for(var i=0; i<this.actividadesProximas.length; i++){
          dateTime = this.actividadesProximas[i].fecha;
          parts= dateTime.split(/[- :TZ]/);
          this.actividadesProximas[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];

          this.proveedor.obtenerCategoriasActividad(this.actividadesProximas[i].id).subscribe(
            (data) => {
              this.categoriasProximas.push(data);
            })
        }
      },
      error => {
          console.log(<any>error);
      }
    )
  }
  

  desplegar(tipo:string) {
    document.getElementById(tipo).classList.toggle(tipo);
  }
}
