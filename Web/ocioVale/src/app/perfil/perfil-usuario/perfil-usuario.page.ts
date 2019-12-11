import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/providers/proveedor.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  mostrarSocio=false;
  mostrarVoluntario = false;
  mostrarFamiliar = false;

  rol = '';
  id = "1";

  constructor(private activeRoute: ActivatedRoute, public proveedor:ProveedorService) {
    this.cargaUsuario();
  }
  
  usuario = {
    "nombre" : '',
    "apellidos" : '',
    "username" : 'eugenio',
  };

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");

    if(this.proveedor.esSocio(this.usuario.username) != null){
      this.mostrarSocio=true;
      this.rol = 'socio';
    }
    if(this.proveedor.esFamiliar(this.usuario.username) != null){
      this.rol = 'familiar de un socio';
      this.mostrarFamiliar = true;
    }
    if(this.proveedor.esVoluntario(this.usuario.username) != null){
      this.rol = 'voluntario';
      this.mostrarVoluntario = true;
    }
    if(this.proveedor.esGestor(this.usuario.username) != null){
      this.rol = 'gestor';
    }
  }

  cargaUsuario(){
    
    let nombre;
    let apellidos;
    let nombreUsuario;
    let valoracionMedia;


    this.proveedor.obtenerUsuario(this.id).subscribe(
      (data) => {
        this.usuario = data;
        
        nombre = this.usuario.nombre;
        apellidos = this.usuario.apellidos;
        nombreUsuario = "@" + this.usuario.username;

        // para cada socio, cojo el familiar segun su id
        this.proveedor.obtenerUsuario(this.usuario[1].id).subscribe(
        (query_part) => {
          this.usuario = query_part; 
          }
        )
      },
      (error) => {
          console.log(<any>error);
      }
    ) 


  }

}//fin class
