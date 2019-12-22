import { Component, OnInit } from '@angular/core';
import {ProveedorService} from '../providers/proveedor.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage{

  recomendadas=[];
  cat_recomendadas=[];
  actividades=[];
  categorias=[];

  tipo="RECOMENDADAS";
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

    this.proveedor.obtenerActividadesRecomendadas(this.usuario, this.esSocio).subscribe(
      (data) => {
        this.recomendadas = data;
        for(var i=0; i<this.recomendadas.length; i++){
          dateTime = this.recomendadas[i].fecha;
          parts= dateTime.split(/[- :TZ]/);
          this.recomendadas[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];

          this.proveedor.obtenerCategoriasActividad(this.recomendadas[i].id).subscribe(
            (data) => {
              this.cat_recomendadas.push(data);
            })
        }

        this.actividades=this.recomendadas;
        this.categorias=this.cat_recomendadas;
        console.log(this.categorias);
      },
      error => {
          console.log(<any>error);
      }
    )
     
  }

  buscar(event){
    let valor=event.target.value;

    if(valor!==''){
      this.proveedor.buscarActividades(valor, this.esSocio, null).subscribe(
        (data) => {
          this.actividades = data;
          this.categorias=[];
          let dateTime;
          let parts;

          for(var i=0; i<this.actividades.length; i++){
            dateTime = this.actividades[i].fecha;
            parts= dateTime.split(/[- :TZ]/);
            this.actividades[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];
  
            this.proveedor.obtenerCategoriasActividad(this.actividades[i].id).subscribe(
              (data) => {
                this.categorias.push(data);
              })
          }
          
          this.tipo="BUSCADAS";
        },
        error => {
            console.log(<any>error);
        }
      )
  
    }else{
      this.actividades=this.recomendadas;
      this.categorias=this.cat_recomendadas;
      this.tipo="RECOMENDADAS";
   }
  }

}