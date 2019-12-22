import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../providers/proveedor.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage{

  actividades=[];
  categorias=[];
  mis_categorias=[];

  //filtros
  filtros = {
    categorias:[],
    valor:"",
    tipo:null,
    fecha_inicio:null,
    fecha_fin: null
  }


  usuario=null;
  esSocio=null;

  constructor(public proveedor:ProveedorService, public auth: AuthenticationService){
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
      await new Promise(r => setTimeout(r, 1000));
    }

    this.proveedor.obtenerMisCategorias(this.usuario, this.esSocio).subscribe(
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
          this.mis_categorias.push(categoria);
        }
      },
      error => {
          console.log(<any>error);
      }
    )
  }

  mostrarFiltros() {
    document.getElementById("filtros").classList.toggle("filtros");
  }

  aplicarFiltros(){
    this.filtros.categorias=[];
    for(var i=0; i<this.mis_categorias.length; i++)
      if(this.mis_categorias[i].select==="danger")
        this.filtros.categorias.push(this.mis_categorias[i].id);

      this.busqueda(true);
  }

  change(indice){
    if(this.mis_categorias[indice].select === "dark")
     this.mis_categorias[indice].select = "danger";
    else
      this.mis_categorias[indice].select = "dark";
  }

  buscar(event){
    this.filtros.valor=event.target.value;
    this.busqueda(false);

  }

  busqueda(filtros){
    var f=null;
    if(filtros)
      f=this.filtros;
    
    this.proveedor.buscarActividades(this.filtros.valor, this.esSocio, f).subscribe(
      (data) => {
        this.actividades = data;
        this.categorias=[];
        let dateTime;
        let parts;

        for(var i=0; i<this.actividades.length; i++){
          dateTime = this.actividades[i].fecha;
          parts= dateTime.split(/[- :TZ]/);
          this.actividades[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];
          this.categorias=[];
          this.proveedor.obtenerCategoriasActividad(this.actividades[i].id).subscribe(
            (data) => {
              console.log(data);
              this.categorias.push(data);
            })
        }
      },
      error => {
          console.log(<any>error);
      }
    )
  }
}
