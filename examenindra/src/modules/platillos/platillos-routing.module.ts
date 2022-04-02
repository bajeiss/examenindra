import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatillosComponent } from './components/platillos/platillos.component';

const routes: Routes = [
  {
    path:'',
      children:
      [
          {path:'platillos', component:PlatillosComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatillosRoutingModule { }
