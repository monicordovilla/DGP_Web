import { Component } from '@angular/core';
import {ProveedorService} from '../providers/proveedor.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  recomendadas=[];
  cat_recomendadas=[];
  actividades=[];
  categorias=[];

  tipo="RECOMENDADAS";
  usuario;
  esSocio;

  constructor(public proveedor:ProveedorService){
    this.usuario=proveedor.getIdTipo();
    this.esSocio=proveedor.getEsSocio();

    this.ionViewDidLoad();
    console.log(this.esSocio + "  eeeee  " + proveedor.getId());
  }

  ionViewDidLoad(){
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