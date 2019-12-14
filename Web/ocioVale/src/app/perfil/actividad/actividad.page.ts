import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/providers/proveedor.service';

@Component({
  selector: 'app-actividad',
  templateUrl: 'actividad.page.html',
  styleUrls: ['actividad.page.scss'],
})
export class actividad {
  id = null;

  actividad = {};

  constructor(private activeRoute: ActivatedRoute, public proveedor:ProveedorService) {
    this.id = this.activeRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(){
    
  }

  eliminarActividad(){
    this.proveedor.eliminarActividad(this.id).subscribe(
      (res) =>{
        console.log(res);
      },
      error =>{
        console.error(error);
      }
    );
  }

}
