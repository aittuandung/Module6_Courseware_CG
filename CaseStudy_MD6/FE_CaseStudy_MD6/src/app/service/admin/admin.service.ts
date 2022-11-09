import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../../model/Page";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API = 'http://localhost:8080/admin';
  info: any;

  constructor(private httpClient: HttpClient) { }

  showListRequestSeller(): Observable<any>{
    return this.httpClient.get(this.API+`/request`)
  }



  acceptSeller(id: number){
    return this.httpClient.post(this.API+`/accept/${id}`, this.info);
  }

  showActiveSeller(page: number): Observable<any>{
    return this.httpClient.get<Page>(this.API+`/show/${page}`)
  }

  deleteSeller(id: number) {
    return this.httpClient.get(this.API+`/delete/${id}`)
  }

}
