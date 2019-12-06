import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../providers/proveedor.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  actividades=[];
  categorias=[];
  todas_categorias=[];

  constructor(public proveedor:ProveedorService){
    this.ionViewDidLoad();
  }

  ngOnInit() {
  }

  ionViewDidLoad(){
    this.proveedor.obtenerCategorias().subscribe(
      (data) => {
        this.todas_categorias = data;
      },
      error => {
          console.log(<any>error);
      }

    )

    let dateTime;
    let parts;
    this.proveedor.obtenerActividades().subscribe(
      (data) => {
        this.actividades = data;

        for(var i=0; i<this.actividades.length; i++){
          dateTime = this.actividades[i].fecha;
          parts= dateTime.split(/[- :TZ]/);
          this.actividades[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];
          this.categorias.push([
            {
              "id": 1,
              "imagen": "http://www.arasaac.org/repositorio/thumbs/10/200/3/30387.png"
            }
          ]);
        }
      },
      error => {
          console.log(<any>error);
      }
    )
    
  }

  filtros() {
    document.getElementById("filtros").classList.toggle("filtros");
  }
}
