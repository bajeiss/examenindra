import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Ingredientes } from '../../models/ingredientes';
import { IngredientespopularesService } from '../ingredientespopulares.service';

@Component({
  selector: 'app-ingredientespopulares',
  templateUrl: './ingredientespopulares.component.html',
  styleUrls: ['./ingredientespopulares.component.css']
})
export class IngredientespopularesComponent implements OnInit {
  IngredientesL:Array<Ingredientes> = [];
  page_size:number = 15;
  page_number:number = 1;
  pageSizeOptions = [15, 25, 50, 100]
  handelPage(e: PageEvent)
  {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
  constructor(
    private IngredientesCtrl:IngredientespopularesService
  ) { }

  ngOnInit(): void {
    this.IngredientesCtrl.getIngredientes().subscribe((respuesta)=>{ 
      this.IngredientesL = respuesta.meals;   
    });
  }

}
