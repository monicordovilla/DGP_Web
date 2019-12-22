import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../providers/proveedor.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage {

  usuario={
    id: "",
    nombre: "",
    username: "",
    apellidos:"",
    password: "",
    email: "",
    telefono: "",
    localidad: "",
    provincia: "",
    domicilio: "",
    descripcion: ""
  };

  categorias=[];
  esSocio;

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
              this.usuario = data[0];
              console.log(data[0]);
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
              this.usuario = data[0];
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
      await new Promise(r => setTimeout(r, 1000));
    }

    this.proveedor.obtenerCategorias().subscribe(
      (data) => {
        for(let i=0; i<data.length; i++){
          var categoria = {
            nombre: null,
            id: null,
            imagen: null,
            select: "dark"
          };
          categoria.nombre = data[i].nombre;
          categoria.imagen = data[i].imagen;
          categoria.id = data[i].id;
          this.categorias.push(categoria);
        }

        this.proveedor.obtenerMisCategorias(this.usuario.id, this.esSocio).subscribe(
          (data) => {
            console.log(data);
            for(let i=0; i<data.length; i++)
              for(let j=0; j<this.categorias.length; j++){
                if(data[i].id===this.categorias[j].id){
                  this.categorias[j].select= "danger";
                }
              }
            
          },
          error => {
              console.log(<any>error);
          }
        )
        
      },
      error => {
          console.log(<any>error);
      }
    )
  }

  desplegar(tipo:string) {
    document.getElementById(tipo).classList.toggle(tipo);
  }

  change(indice){
    if(this.categorias[indice].select === "dark")
     this.categorias[indice].select = "danger";
    else
      this.categorias[indice].select = "dark";
  }
}
