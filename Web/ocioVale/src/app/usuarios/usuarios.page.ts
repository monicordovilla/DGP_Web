import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../providers/proveedor.service';

@Component({
  selector: 'usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss'],
})
export class Usuarios implements OnInit {
  private usuarios : FormGroup;

  datos = [ ];

  perfil = {
    "valoracion" : ''
  };

  constructor(public proveedor:ProveedorService) {
    this.cargaValoracion();
  }

  cargaValoracion(){

    this.proveedor.obtenerValoracion().subscribe(
      (data) => {
        this.datos = data;

        for(var i=0; i<this.datos.length; i++){          
          this.perfil.valoracion = this.datos[i].puntuacion;
        }
      },
      error => {
          console.log(<any>error);
      }
    ) 
  }

  ngOnInit() {
  }

}
