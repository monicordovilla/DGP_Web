import {NgModule} from '@angular/core'
import { HeaderPage } from './header/header.page';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HeaderPage, MenuComponent],
    exports: [HeaderPage, MenuComponent],
    imports: [CommonModule, IonicModule]
})

export class ComponentsModule{}