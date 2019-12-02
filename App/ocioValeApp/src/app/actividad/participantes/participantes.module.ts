import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParticipantesPage } from './participantes.page';
import {ComponentsModule} from '../../components.module';

const routes: Routes = [
  {
    path: '',
    component: ParticipantesPage
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
  declarations: [ParticipantesPage]
})
export class ParticipantesPageModule {}
