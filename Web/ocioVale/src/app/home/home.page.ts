import { Component } from '@angular/core';
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

//    parseInt(localStorage.getItem("categoria.id"));

    let postData =[
      this.sesion.usuario,
      this.sesion.password
    ];

    console.log(postData);

    this.proveedor.enviarLogin(postData).subscribe(
      (res) => {
        //postData = res['results'],
        //console.log(res['results']);
      },
      error =>{
        console.error(error);
      }
    )
  }

  ngOnInit() {
  }
}
