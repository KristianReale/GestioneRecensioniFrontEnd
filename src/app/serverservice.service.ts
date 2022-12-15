import { Injectable } from '@angular/core';
import { Recensione } from './Recensione';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerserviceService {
  private url : string = "http://localhost:8080/dammiRecensioni";

  constructor(private http: HttpClient) { }

  getRecensioni(): Observable<Recensione[]>{
    var recensioni : Observable<Recensione []> = this.http.get<Recensione []>(this.url);
    return recensioni;
  }

}
