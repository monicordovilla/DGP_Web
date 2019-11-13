import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'gestion-gestor', loadChildren: () => import('./gestion-gestor/gestion-gestor.module').then( m => m.GestionGestorModule)},
  //{ path: 'gestion-socio', loadChildren: () => import('./gestion-socio/gestion-socio.module').then( m => m.GestionSocioModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
