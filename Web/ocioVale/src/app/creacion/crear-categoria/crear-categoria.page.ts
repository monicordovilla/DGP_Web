import { Component, OnInit } from '@angular/core';
import {ProveedorService} from '../../providers/proveedor.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.page.html',
  styleUrls: ['./crear-categoria.page.scss'],
})
export class CrearCategoriaPage implements OnInit {

  categoria = 
    {
    };

  constructor(public proveedor:ProveedorService) { }

  crearCategoria(){
    console.log("crear categoria");
    this.proveedor.enviarCategoria(this.categoria);
  }


  ngOnInit() {
  }

}
