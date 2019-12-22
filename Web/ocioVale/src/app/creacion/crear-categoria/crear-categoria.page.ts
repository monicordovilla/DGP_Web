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
    let modalLogin = document.getElementById('loginPopUp');
    let form = modalLogin.querySelector("#formLogin");
    modalLogin.style.display='block'

    console.log("crear categoria");
    this.proveedor.enviarCategoria(this.categoria).subscribe(
      (res) => { 
        modalLogin.style.backgroundColor= '#58E8C6';
        this.mostrarMensaje(modalLogin, "info", "La categoría se ha creado correctamente");  
      },
      error =>{
        modalLogin.style.backgroundColor= '#FF7C93';
        this.mostrarMensaje(modalLogin, "info", "No se ha podido crear la categoria, intentelo de nuevo");
        console.error(error);
      }
    );
  }

  mostrarMensaje(modal, type, message) {
    let css = (type == "info" ? "message_box_info" : "message_box_error");
    let messageBox = modal.querySelector('#messageBox');
    messageBox.classList = "";
    messageBox.classList.add(css);
    messageBox.innerText = message;
  }
  ngOnInit() {
  }

}
