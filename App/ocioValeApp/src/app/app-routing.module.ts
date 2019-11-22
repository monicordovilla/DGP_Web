import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'actividad', loadChildren: './actividad/actividad.module#ActividadPageModule' },
  { path: 'myActivities', loadChildren: './myActivities/myActivities.module#myActivitiesPageModule' },
  { path: 'valoracion', loadChildren: './valoracion/valoracion.module#ValoracionPageModule' },
  { path: 'masinfo', loadChildren: './actividad/masinfo/masinfo.module#MasinfoPageModule' },
  { path: 'chat', loadChildren: './actividad/chat/chat.module#ChatPageModule' },
  { path: 'crear', loadChildren: './actividad/crear/crear.module#CrearPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
