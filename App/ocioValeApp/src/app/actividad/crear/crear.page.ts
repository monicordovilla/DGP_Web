import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/providers/proveedor.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    categorias: [],
    imagen: ""
  };

  usuario=null;
  esSocio=null;

  constructor(public proveedor:ProveedorService,  public auth: AuthenticationService){
    this.ionViewDidLoad();
  }

  inicializarUsuario() {
      if(!this.auth.isAuthenticated() && location.pathname != '' && location.pathname != '/inicio') {
          console.log("Auth failed");
          location.assign(location.origin);
      }
      else{
        this.proveedor.esSocio(this.auth.auth).subscribe(
          (data) => {
            if(data.length>0){
              this.esSocio=true;
              this.usuario = data[0].id;
            }
          },
          error => {
              console.log(<any>error);
          }
        )
        this.proveedor.esVoluntario(this.auth.auth).subscribe(
          (data) => {
            if(data.length>0){
              this.esSocio=false;
              this.usuario = data[0].id;
            }
          },
          error => {
              console.log(<any>error);
          }
        )

      }
  }

  async ionViewDidLoad(){
    this.inicializarUsuario();

    while(this.usuario==null){
      await new Promise(r => setTimeout(r, 2000));
    }

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
        async (res) => {

          let postData2 ={
            idParticipante: this.usuario,
            idActividad: null
          };

          this.proveedor.obtenerActividades().subscribe(
            (res) => {
              postData2.idActividad=res[res.length-1].id;
            },
            error =>{
              console.error(error);
            }
          )
          
          while(postData2.idActividad==null){
            await new Promise(r => setTimeout(r, 1000));
          }


          this.proveedor.apuntarse(postData2, this.esSocio).subscribe(
            (res) => { 
              postData2 = res['results'];
            },
            error =>{
              console.error(error);
            }
          )

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