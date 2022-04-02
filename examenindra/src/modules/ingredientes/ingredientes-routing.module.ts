import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientespopularesComponent } from './components/ingredientespopulares/ingredientespopulares.component';

const routes: Routes = [
  {
    path:'',
      children:
      [
          {path:'ingredientespopulares', component:IngredientespopularesComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientesRoutingModule { }
