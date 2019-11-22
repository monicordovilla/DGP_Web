import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {ComponentsModule} from '../../components.module';

import { CrearPage } from './crear.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPage
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
  declarations: [CrearPage]
})
export class CrearPageModule {}
