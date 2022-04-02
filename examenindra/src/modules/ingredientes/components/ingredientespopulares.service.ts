import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class IngredientespopularesService {
  API: string = 'api/json/v1/1/list.php?i=list'
  constructor(private CtrlHttp:HttpClient) { }

  getIngredientes():Observable<any>
  {
    return this.CtrlHttp.get<any>(this.API, this.getHeaders()  );
  }

  getHeaders() 
    {
        const options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json, charset=utf-8').append('Accept', 'application/json'),
            responseType:"json" as 'json'           
        }
		return options;
    }
}
