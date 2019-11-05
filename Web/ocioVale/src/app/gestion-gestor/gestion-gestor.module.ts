import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GestionGestor } from './gestion-gestor.page';
import { HeaderPage } from '../header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: GestionGestor
      }
    ])
  ],
  declarations: [GestionGestor, HeaderPage]
})
export class GestionGestorModule {}
