import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { perfilGestor } from './perfilGestor.page';
import { HeaderPage } from '../../header/header.page';

const routes: Routes = [
  {
    path: '',
    component: perfilGestor
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [perfilGestor, HeaderPage]
})
export class perfilGestorPageModule {}
