import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'perfilGestor/:username', loadChildren: () => import('./perfil/perfilGestor/perfilGestor.module').then( m=> m.perfilGestorPageModule)},
  { path: 'perfilVoluntario/:username', loadChildren: () => import('./perfil/perfilVoluntario/perfilVoluntario.module').then( m=> m.perfilVoluntarioPageModule)},
  { path: 'perfilSocioFamiliar/:username', loadChildren: () => import('./perfil/perfilSocioFamiliar/perfilSocioFamiliar.module').then( m=> m.perfilSocioFamiliarPageModule)},
  { path: 'perfilSocio/:username', loadChildren: () => import('./perfil/perfilSocio/perfilSocio.module').then( m=> m.perfilSocioPageModule)},
  { path: 'actividad/:id', loadChildren: () => import('./perfil/actividad/actividad.module').then( m=> m.actividadPageModule)},
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then( m=> m.UsuariosModule)},
  { path: 'actividades', loadChildren: () => import('./actividades/actividades.module').then( m=> m.ActividadesModule)},
  { path: 'categorias', loadChildren: () => import('./categorias/categorias.module').then( m=> m.CategoriasModule)},
  { path: 'crear-usuario', loadChildren: () => import('./creacion/crear-usuario/creacion.module').then( m=> m.CrearPageModule)},
  { path: 'crear-actividad', loadChildren: () => import('./creacion/crear-actividad/crear-actividad.module').then( m=> m.CrearActividadPageModule)},
  { path: 'crear-categoria', loadChildren: () => import('./creacion/crear-categoria/crear-categoria.module').then( m=> m.CrearCategoriaPageModule)}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
