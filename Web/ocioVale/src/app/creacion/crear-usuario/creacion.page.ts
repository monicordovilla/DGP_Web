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
    let modalLogin = document.getElementById('loginPopUp');
    let form = modalLogin.querySelector("#formLogin");
    modalLogin.style.display='block'

    if(this.rol == 'gestor'){
      this.proveedor.enviarGestor(this.usuario).subscribe(
        (res) => { 
          modalLogin.style.backgroundColor= '#58E8C6';
          this.mostrarMensaje(modalLogin, "info", "El gestor se ha creado correctamente");  
        },
        error =>{
          modalLogin.style.backgroundColor= '#FF7C93';
          this.mostrarMensaje(modalLogin, "info", "No se ha podido crear el gestor, intentelo de nuevo");
          console.error(error);
        }
      );
    }
    if(this.rol == 'voluntario'){
      this.proveedor.enviarVoluntario(this.usuario).subscribe(
        (res) => { 
          modalLogin.style.backgroundColor= '#58E8C6';
          this.mostrarMensaje(modalLogin, "info", "El voluntario se ha creado correctamente");  
        },
        error =>{
          modalLogin.style.backgroundColor= '#FF7C93';
          this.mostrarMensaje(modalLogin, "info", "No se ha podido crear el voluntario, intentelo de nuevo");
          console.error(error);
        }
      );
    }
    if(this.rol == 'socioFamiliar'){
      this.proveedor.enviarFamiliar(this.usuario).subscribe(
        (res) => { 
          modalLogin.style.backgroundColor= '#58E8C6';
          this.mostrarMensaje(modalLogin, "info", "El familiar se ha creado correctamente");  
        },
        error =>{
          modalLogin.style.backgroundColor= '#FF7C93';
          this.mostrarMensaje(modalLogin, "info", "No se ha podido crear el familiar, intentelo de nuevo");
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
          modalLogin.style.backgroundColor= '#58E8C6';
          this.mostrarMensaje(modalLogin, "info", "El socio se ha creado correctamente");  
        },
        error =>{
          modalLogin.style.backgroundColor= '#FF7C93';
          this.mostrarMensaje(modalLogin, "info", "No se ha podido crear el socio, intentelo de nuevo");
          console.error(error);
        }
      );
    }
  }

  mostrarMensaje(modal, type, message) {
    let css = (type == "info" ? "message_box_info" : "message_box_error");
    let messageBox = modal.querySelector('#messageBox');
    messageBox.classList = "";
    messageBox.classList.add(css);
    messageBox.innerText = message;
  }

}
