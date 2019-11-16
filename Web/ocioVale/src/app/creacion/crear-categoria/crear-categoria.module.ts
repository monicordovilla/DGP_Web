import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CrearCategoriaPage } from './crear-categoria.page';
import { HeaderPage } from '../../header/header.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCategoriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [CrearCategoriaPage, HeaderPage]
  
})
export class CrearCategoriaPageModule {}
