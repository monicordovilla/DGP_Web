import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActividadPage } from './actividad.page';
import {ComponentsModule} from '../components.module';

const routes: Routes = [
  {
    path: '',
    component: ActividadPage
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
  declarations: [ActividadPage]
})
export class ActividadPageModule {}
