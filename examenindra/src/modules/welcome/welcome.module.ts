import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';

 

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ HttpClientModule,   ]
})
export class WelcomeModule { }
