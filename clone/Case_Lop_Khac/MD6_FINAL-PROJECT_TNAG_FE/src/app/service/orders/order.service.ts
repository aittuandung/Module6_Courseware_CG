import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CartDetailDTO} from "../../model/CartDetailDTO";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API = 'http://localhost:8080/orders';
  constructor(private httpClient: HttpClient) { }
    findAllOrderOfCustomer() :Observable<any> {
    return this.httpClient.get(this.API+ '/customer-order');
    }
  getListStatus(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/orderstatus');
  }
  getListOrderDetailByOrder(order_id: any): Observable<any> {
    return this.httpClient.get('http://localhost:8080/orderdetails/order/'+order_id)
  }
  createOrder(merchant_id: any, info: any): Observable<any> {
    return this.httpClient.post(this.API+ '/createOrder/' + merchant_id, info)
  }
  showOrderListOfMerchant(): Observable<any>{
    return this.httpClient.get(this.API + `/merchant-order`)
  }
  showOrderListOfCustomer(): Observable<any>{
    return this.httpClient.get(this.API + `/customer-order`);
  }

  showWaitingOrder(): Observable<any>{
    return this.httpClient.get(this.API + `/status/3`);
  }

  showAcceptedOrder(): Observable<any>{
    return this.httpClient.get(this.API + `/status/1`);
  }

  showDeniedOrder(): Observable<any>{
    return this.httpClient.get(this.API + `/status/2`);
  }

  acceptOrder(orderId: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.put(this.API + `/${orderId}/accept`, this.anything);
  }

  deny(orderId: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.put(this.API + `/${orderId}/deny`, this.anything);
  }

  searchOrder(search: any): Observable<any>{
    return this.httpClient.get(this.API + `/search-all/${search}`);
  }

  // showOrderListOfMerchant(): Observable<any>{
  //   return this.httpClient.get(this.API + `/merchant-order`)
  // }

  searchDenyOrder(search: any): Observable<any>{
    return this.httpClient.get(this.API + `/search-denied/${search}`)
  }

  searchAcceptOrder(search: any): Observable<any>{
    return this.httpClient.get(this.API + `/search-accepted/${search}`)
  }

  searchWaitingOrder(search: any): Observable<any>{
    return this.httpClient.get(this.API + `/search-wait/${search}`)
  }
  getListOrderbyCustomerSearch(search: any): Observable<any> {
    return this.httpClient.get(this.API+ '/customer-search/'+search);
  }
}
