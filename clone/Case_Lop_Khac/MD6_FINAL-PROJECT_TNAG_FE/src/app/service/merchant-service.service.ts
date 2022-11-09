import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Merchant} from "../model/merchant";

@Injectable({
  providedIn: 'root'
})
export class MerchantServiceService {
  API = 'http://localhost:8080/merchants'
  constructor(private httpClient: HttpClient) { }
  findAll() : Observable<any> {
    return this.httpClient.get(this.API)
  }

  updateActiveMerchant(id: any): Observable<any> {
    return this.httpClient.get(this.API+`/change-status`+`/${id}`);
  }
  // updateActiveMerchant(id: any, status: any): Observable<any> {
  //   return this.httpClient.get(this.API+`/change-status`+`/${id}`+`/${status}`);
  // }

  updateGoldMerchant(id: number | undefined, status: any): Observable<any> {
    return this.httpClient.get(this.API+`/change-gold-status`+`/${id}`+`/${status}`);
  }
}
