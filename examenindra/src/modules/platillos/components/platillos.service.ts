import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {
  API: string = 'api/json/v1/1/search.php?s=Arrabiata'
  constructor(private CtrlHttp:HttpClient) { }

  getPlatillos():Observable<any>
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
