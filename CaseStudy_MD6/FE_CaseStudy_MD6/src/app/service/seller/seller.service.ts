import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Page } from 'src/app/model/Page';
import {UserToken} from "../../model/UserToken";

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  API = 'http://localhost:8080/sellers';
  info: any;
  constructor(private httpClient: HttpClient) { }

  // showListProducts(page: number,userName : any): Observable<any>{
  //   return this.httpClient.get<Page>(this.API+`/show/${page}`, userName);
  // }

  showListProducts(userName : string, page:number):Observable<any>{
    console.log("lít product service: ",userName)
    return this.httpClient.post<Page>(this.API+`/show/${page}`, userName)
  }

  createProduct(product: any, userId:any): Observable<any>{
    console.log("product",product)
    return this.httpClient.post<any>(this.API+`/save-product/`+userId,product);
  }

  getThisSeller(sellerId: number):Observable<any>{
    return this.httpClient.get<any>(this.API+`/${sellerId}`);
  }
}
