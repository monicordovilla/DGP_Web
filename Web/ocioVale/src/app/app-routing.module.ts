import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'perfilGestor', loadChildren: () => import('./perfilGestor/perfilGestor.module').then( m=> m.perfilGestorPageModule)},
  { path: 'perfilVoluntario', loadChildren: () => import('./perfilVoluntario/perfilVoluntario.module').then( m=> m.perfilVoluntarioPageModule)},
  { path: 'creacion', loadChildren: () => import('./creacion/creacion.module').then( m=> m.CrearPageModule)},
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then( m=> m.UsuariosModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
