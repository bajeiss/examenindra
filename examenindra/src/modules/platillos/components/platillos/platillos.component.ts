import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Platillo } from '../../models/platillo';
import { PlatillosService } from '../platillos.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {
  Platillos:Array<Platillo> = [];
  page_size:number = 10;
  page_number:number = 1;
  pageSizeOptions = [5, 10, 20, 100]
  handelPage(e: PageEvent)
  {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
  constructor(private platillosCtrl:PlatillosService) { }

  ngOnInit(): void {
    this.platillosCtrl.getPlatillos().subscribe((respuesta)=>{ 
      this.Platillos = respuesta.meals;   
    });
  }

}
