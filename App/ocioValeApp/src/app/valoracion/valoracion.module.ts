import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from '../components.module';

import { IonicModule } from '@ionic/angular';

import { ValoracionPage } from './valoracion.page';

const routes: Routes = [
  {
    path: '',
    component: ValoracionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ValoracionPage]
})
export class ValoracionPageModule {}
