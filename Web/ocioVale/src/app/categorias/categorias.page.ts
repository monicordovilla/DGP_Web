import { Component } from '@angular/core';
import {ProveedorService} from '../providers/proveedor.service';


@Component({
  selector: 'categorias',
  templateUrl: 'categorias.page.html',
  styleUrls: ['categorias.page.scss'],
})
export class Categorias {

  categorias = [];

  constructor(public proveedor:ProveedorService) {
    this.cargaCategorias();
  }

  cargaCategorias(){
    

    this.proveedor.obtenerCategorias().subscribe(
      (data) => {
        console.log(data);
        this.categorias = data;
      },
      error => {
          console.log(<any>error);
      }
    ) 

  }

  eliminarCategoria(ident: String){
    this.proveedor.eliminarActividad(ident).subscribe(
      (res) =>{
        console.log(res);
      },
      error =>{
        console.error(error);
      }
    );
  }

}
