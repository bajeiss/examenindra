import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientesRoutingModule } from './ingredientes-routing.module';
import { IngredientespopularesComponent } from './components/ingredientespopulares/ingredientespopulares.component';
import { PaginatePipe } from './pipe/paginate.pipe'; 
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    IngredientespopularesComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    IngredientesRoutingModule,
    
    MatPaginatorModule
  ]
})
export class IngredientesModule { }
