import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../providers/proveedor.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  sesion =[
    {
      "usuario": '',
      "password": ''
    },
  ]

  constructor(public proveedor:ProveedorService) {}

  login(){
    console.log("login");

  //no hace falta, es un ion.input, se escribe automaticamente, asi que en cuanto le das a enviar se rellena
    /*let postData =[
      this.sesion.usuario,
      this.sesion.password
    ];*/

    console.log(this.sesion);

    this.proveedor.enviarLogin(this.sesion).subscribe(
      (res) => {
        this.sesion = res['results'],
        console.log(res['results']);
      },
      error =>{
        console.error(error);
      }
    )
  }

  ngOnInit() {
  }
}
