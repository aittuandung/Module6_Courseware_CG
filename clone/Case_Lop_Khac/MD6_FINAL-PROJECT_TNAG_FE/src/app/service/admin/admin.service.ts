import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API = 'http://localhost:8080';
  info: any;

  constructor(private httpClient: HttpClient) { }
  showListRequestMerchant(): Observable<any>{
    return this.httpClient.get(this.API+`/merchant/request`);
  }

  acceptMerchant(id: number){
    return this.httpClient.post(this.API+`/accept/${id}`, this.info);
  }

  refuseMerchant(id: number){
    return this.httpClient.post(this.API +`/refuse/${id}`, this.info);
  }
}
