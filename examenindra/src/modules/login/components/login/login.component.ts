import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmLogin:FormGroup;
  UserLoged:User;
  constructor(
    public form:FormBuilder, 
    private router: Router
  ) { 
    this.UserLoged = {
      id:'',
      name:'',
      last_name:'',
      email:'',
      password: '',
      username:'',
    };
    this.frmLogin= this.form.group({
      username:[''],
      password:[''] 
    });
  }

  ngOnInit(): void {
     
  }
  autenticar():any{
    this.UserLoged = this.frmLogin.value;
     if(this.UserLoged.username == 'user' && this.UserLoged.password == 'root'){
      this.UserLoged.email = "jesus.israe.basto.ramos@gmail.com";
      this.UserLoged.name = "Jesús Israel";
      this.UserLoged.last_name = "Basto"
      this.UserLoged.id = "1";
      
      this.registrarsesion(this.UserLoged);
      this.router.navigate(['/welcome/welcome']).then;
     }      
    else
      {
        this.frmLogin= this.form.group({
          username:[''],
          password:[''] 
        });
      }
     
  }

   registrarsesion(usr:User):any{
    localStorage.setItem('user', JSON.stringify(usr));
   }
}
