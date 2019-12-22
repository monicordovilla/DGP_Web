import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../../providers/proveedor.service';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.page.html',
  styleUrls: ['./crear-actividad.page.scss'],
})
export class CrearActividadPage implements OnInit {
  private creacionActividad : FormGroup;

  categorias =[
  ];

  maxsocios = 1;
  maxvoluntarios = 1;

  actividad = {
    "categorias": []
  };

  constructor(public proveedor:ProveedorService) {
    this.cargaCategorias();
  }

  cargaCategorias(){
    let nombre;
    this.proveedor.obtenerCategorias().subscribe(
      (data) => {
        this.categorias = data;

        for(var i=0; i<this.categorias.length; i++){
          nombre = this.categorias[i].nombre;
        }
      }
    )
  }

  mostrarMensaje(modal, type, message) {
    let css = (type == "info" ? "message_box_info" : "message_box_error");
    let messageBox = modal.querySelector('#messageBox');
    messageBox.classList = "";
    messageBox.classList.add(css);
    messageBox.innerText = message;
  }

  crearActividad(){
    console.log("crear actividad");

    let modalLogin = document.getElementById('loginPopUp');
    let form = modalLogin.querySelector("#formLogin");
    modalLogin.style.display='block'

    //let modal = document.getElementById('loginPopUp');
    //modal.style.display='block'

    parseInt(localStorage.getItem("categoria.id"));
    //console.log(this.actividad.categorias);
    let categorias = [];
    for(var i= 0; i<this.actividad.categorias.length; i++){
      categorias.push(parseInt(this.actividad.categorias[i]));
    }
    this.actividad.categorias = categorias;
    //console.log(this.actividad.categorias);

    let postData =[
      this.actividad,
      this.maxvoluntarios,
      this.maxsocios
    ];
    
    this.proveedor.enviarActividad(postData).subscribe(
      (res) => { 
        modalLogin.style.backgroundColor= '#58E8C6';
        this.mostrarMensaje(modalLogin, "info", "La actividad se ha creado correctamente");        
      },
      error =>{
        modalLogin.style.backgroundColor= '#FF7C93';
        this.mostrarMensaje(modalLogin, "info", "No se ha podido crear la actividad, intentelo de nuevo");
        console.error(error);
      }
    )
  }

  

  ngOnInit() {
  }

}
