import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.page.html',
  styleUrls: ['./crear-categoria.page.scss'],
})
export class CrearCategoriaPage implements OnInit {

  categorias = 
    {
      "nombre": '',
      "imagen": ''
    }

  constructor() { }

  ngOnInit() {
  }

}
