import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { myActivitiesPage } from './myActivities.page';
import {ComponentsModule} from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: myActivitiesPage
      }
    ])
  ],
  declarations: [myActivitiesPage]
})
export class myActivitiesPageModule {}
