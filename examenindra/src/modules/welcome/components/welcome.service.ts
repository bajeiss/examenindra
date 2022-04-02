import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 


@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  API: string = 'api/json/v1/1/random.php'
//environment.api +
  constructor(private CtrlHttp:HttpClient) { }

  getPlatillo():Observable<any>
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
