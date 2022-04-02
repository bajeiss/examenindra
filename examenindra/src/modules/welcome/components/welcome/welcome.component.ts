import { Component, OnInit } from '@angular/core';
import { Platillo } from '../../models/platillo';
import { WelcomeService } from '../welcome.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/modules/login/components/models/models';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  platillos:Array<Platillo> = [];
  platillo:Platillo = {strMeal:"", idMeal:"", strArea:"", strCategory:"", strInstructions:"",strMealThumb:"",strYoutube:""};
  load:any;
  UserLoged:User;
  usr:any;
  constructor(
    private welcomCtrl:WelcomeService,
    private _sanitizer: DomSanitizer,
    

  ) { 
    this.load = false;
    this.UserLoged = {
      id:'',
      name:'',
      last_name:'',
      email:'',
      password: '',
      username:'',
    };
    this.usr = localStorage.getItem('user');
    this.UserLoged = JSON.parse(this.usr);
  }

  ngOnInit(): void {
    
    this.welcomCtrl.getPlatillo().subscribe((respuesta)=>{ 
      this.platillos  = respuesta.meals;   
      if(this.platillos.length > 0)
        this.platillo = this.platillos[0];
 
    });
  }

  getVideoIframe(url:any) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }

  ocultaspiner()
  {
    this.load = true;
  }


}
