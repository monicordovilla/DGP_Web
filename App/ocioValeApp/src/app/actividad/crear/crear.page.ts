import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/providers/proveedor.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage{
 
  categorias=[];
  actividad={
    nombre: "",
    fecha: "",
    hora: null,
    lugar: "",
    duracion: null,
    descripcion: "",
    categorias: null,
    imagen: ""
  };

  id;

  constructor(public proveedor:ProveedorService){
    this.ionViewDidLoad();
    this.id=proveedor.getId();
  }

  ionViewDidLoad(){
    this.proveedor.obtenerCategorias().subscribe(
      (data) => {
        this.categorias = data;
      },
      error => {
          console.log(<any>error);
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


  crear(){
    let modalLogin = document.getElementById('loginPopUp');
    let form = modalLogin.querySelector("#formLogin");
    modalLogin.style.display='block';

    let minutos = 0;
    if(this.actividad.duracion!=null){
      let parts= this.actividad.duracion.split(/[:]/);
      minutos = parseInt(parts[0])*60 + parseInt(parts[1]);
    }

    if(minutos==0 || this.actividad.nombre==="" || this.actividad.lugar==="" || this.actividad.descripcion==="" || 
        this.actividad.fecha==null || this.actividad.hora==null){
          modalLogin.style.backgroundColor= '#FF7C93';
          this.mostrarMensaje(modalLogin, "info", "¡ERROR! Debes introducir los datos de todos los campos.");
    }

    else{
      if(this.categorias.length>0){
        for(var i=0; i<this.actividad.categorias.length; i++){
          this.actividad.categorias[i] = parseInt(this.actividad.categorias[i]);
        }
      }

      let postData ={
        nombreActividad: this.actividad.nombre,
        descripcion: this.actividad.descripcion,
        lugar: this.actividad.lugar,
        duracion: minutos,
        imagen: this.actividad.imagen,
        fecha:  this.actividad.fecha + " " + this.actividad.hora,
        categorias: this.actividad.categorias
      };

      this.proveedor.crearActividad(postData).subscribe(
        (res) => {
          modalLogin.style.backgroundColor= '#36ff33';
          this.mostrarMensaje(modalLogin, "info", "La actividad se ha creado correctamente");
          postData = res['results'];



        },
        error =>{
          console.error(error);
          modalLogin.style.backgroundColor= '#FF7C93';
          this.mostrarMensaje(modalLogin, "info", "No se ha podido crear la actividad, intentelo de nuevo");
        }
      );
    }
  }

}

