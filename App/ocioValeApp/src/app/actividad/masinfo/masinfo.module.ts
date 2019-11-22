import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MasinfoPage } from './masinfo.page';
import {ComponentsModule} from '../../components.module';

const routes: Routes = [
  {
    path: '',
    component: MasinfoPage
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
  declarations: [MasinfoPage]
})
export class MasinfoPageModule {}
