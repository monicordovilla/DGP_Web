import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../providers/proveedor.service';
import {AlertController} from '@ionic/angular';
import {AuthenticationService} from '../services/authentication.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  sesion =
    {
      "username": '',
      "password": ''
    }

  constructor(public alertController: AlertController, public proveedor:ProveedorService, public auth: AuthenticationService) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Fallo de login',
      message: 'Compruebe que los datos que ha insertado son correctos.',
      buttons: ['OK']
    });

    await alert.present();
  }
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
        //this.sesion = res['results'],
        //this.router.navigate(['actividades']); //Descomentar si podemos hacer bien el enrutado
        console.log(res);
        if(res.length == 0){
            this.presentAlert();
        }
        else {
            this.auth.login(this.sesion.username);
            location.assign(location.origin + '/actividades' ); //Borrar si podemos hacer bien el enrutado
        }
      },
      error =>{
        console.error(error);
        this.presentAlert();
      }
    )
  }

  ngOnInit() {
  }
}
