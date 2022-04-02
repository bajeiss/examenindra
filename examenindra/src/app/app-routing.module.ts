import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path:'login',
    loadChildren:()=> import('src/modules/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'welcome',
    loadChildren:()=> import('src/modules/welcome/welcome.module').then(m=>m.WelcomeModule)
  },
  {
    path:'ingredientes',
    loadChildren:()=> import('src/modules/ingredientes/ingredientes.module').then(m=>m.IngredientesModule)
  },
  {
    path:'platillos',
    loadChildren:()=> import('src/modules/platillos/platillos.module').then(m=>m.PlatillosModule)
  },
   
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
