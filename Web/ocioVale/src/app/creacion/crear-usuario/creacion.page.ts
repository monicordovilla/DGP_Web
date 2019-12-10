import { Component } from '@angular/core';
import {ProveedorService} from '../../providers/proveedor.service';

@Component({
  selector: 'app-creacion',
  templateUrl: 'creacion.page.html',
  styleUrls: ['creacion.page.scss'],
})
export class CrearPage {
  mostrar=false;
  mostrarDescPrivada=false;

  usuario = {
  };
  descripcionPrivada = '';

  constructor(public proveedor:ProveedorService) {}
  rol : any;

  f(){
    this.mostrar = true;
    if(this.rol == 'socio'){
      this.mostrarDescPrivada=true;
    }
  }

  crearUsuario(){
    if(this.rol == 'gestor'){
      this.proveedor.enviarGestor(this.usuario).subscribe(
        (res) => { 
          this.usuario = res['results'];
        },
        error =>{
          console.error(error);
        }
      );
    }
    if(this.rol == 'voluntario'){
      this.proveedor.enviarVoluntario(this.usuario).subscribe(
        (res) => { 
          this.usuario = res['results'];
        },
        error =>{
          console.error(error);
        }
      );
    }
    if(this.rol == 'socioFamiliar'){
      this.proveedor.enviarFamiliar(this.usuario).subscribe(
        (res) => { 
          this.usuario = res['results'];
        },
        error =>{
          console.error(error);
        }
      );
    }
    if(this.rol == 'socio'){

      let postData =[
        this.usuario,
        this.descripcionPrivada,
      ];

      this.proveedor.enviarSocio(postData).subscribe(
        (res) => { 
          postData = res['results'];
        },
        error =>{
          console.error(error);
        }
      );
    }
  }

}
