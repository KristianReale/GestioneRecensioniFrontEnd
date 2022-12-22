import { Injectable } from '@angular/core';
import { Recensione } from './Recensione';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerserviceService {
  private url : string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  editRecensione(jsessionid: string, rec: Recensione): Observable<Boolean>{
    return this.http.post<Boolean>(this.url + "/editRecensione?jsessionid=" + jsessionid, rec);
  }

  deleteRecensione(jsessionid: string, idRec: BigInt): Observable<Boolean>{
    return this.http.post<Boolean>(this.url + "/deleteRecensione?jsessionid=" + jsessionid, {idRecensione: idRec});
  }

  getRecensioni(jsessionid: string): Observable<Recensione[]>{
    var recensioni : Observable<Recensione []> = this.http.post<Recensione []>(this.url + "/dammiRecensioni?jsessionid=" + jsessionid, {});
    return recensioni;
  }

  checkLogin(jsessionid: string): Observable<Boolean>{
    //let queryParams = new HttpParams();
    //queryParams.append("jsessionid", jsessionid);
    return this.http.get<Boolean>(this.url + "/checkAuth", {params: {jsessionid: jsessionid}});
  }

}
