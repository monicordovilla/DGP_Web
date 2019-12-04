import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { perfilSocioFamiliar } from './perfilSocioFamiliar.page';
import { HeaderPage } from '../../header/header.page';

const routes: Routes = [
  {
    path: '',
    component: perfilSocioFamiliar
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [perfilSocioFamiliar, HeaderPage]
})
export class perfilSocioFamiliarPageModule {}
