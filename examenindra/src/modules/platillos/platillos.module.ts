import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PlatillosRoutingModule } from './platillos-routing.module';
import { PlatillosComponent } from './components/platillos/platillos.component';
import { PaginatePipe } from './pipe/paginate.pipe';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
  declarations: [
    PlatillosComponent,
    PaginatePipe, 
  ],
  imports: [
    CommonModule,
    PlatillosRoutingModule,
    HttpClientModule,
    MatPaginatorModule
  ]
})
export class PlatillosModule { }
