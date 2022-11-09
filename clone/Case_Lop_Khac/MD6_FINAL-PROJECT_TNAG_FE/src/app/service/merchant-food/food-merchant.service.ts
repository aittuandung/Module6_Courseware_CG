import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Food} from "../../model/food";
import {Merchant} from "../../model/merchant";

@Injectable({
  providedIn: 'root'
})
export class FoodMerchantService {
  API = 'http://localhost:8080/foods';

  constructor(private httpClient: HttpClient) {
  }
  findALlByUser(): Observable<any> {
    return this.httpClient.get(this.API + '/show-food-by-user');
  }
  searchByFoodNameByUser(name: string): Observable<any> {
    return this.httpClient.get(this.API + '/search-all-food-by-name?name=' + name);
  }
  findAll(): Observable<any> {
    return this.httpClient.get(this.API + '/merchant');
  }
  findAllByMerchant(id:any): Observable<any> {
    return this.httpClient.get(this.API + '/' + id);
  }
  findAllFood(): Observable<any> {
    return this.httpClient.get(this.API);
  }

  create(food: Food, id_merchant: number): Observable<any> {
    return this.httpClient.post(this.API, food)
  }

  delete(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.put(this.API + '/delete-food/' + id)
  }
  getListFoodImage(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/foodimage/' + id)
  }
  findById(id: any): Observable<any> {
    return this.httpClient.get(this.API + '/food-id/' + id)
  }
  update(id: any, food: Food): Observable<any> {
    return this.httpClient.put(this.API + '/update-food/'+id, food);
  }
  searchByFoodName(name: string, id: number): Observable<any> {
    return this.httpClient.get(this.API + '/' + id + '/search-by-food-name' + '?name=' + name);
  }
  listSoldTop8(): Observable<any> {
    return this.httpClient.get(this.API + '/best-seller')
  }
  listNewFood(): Observable<any> {
    return this.httpClient.get(this.API + '/newest')
  }
  listSoldTop3ByMerchant(merchant_id: any): Observable<any> {
    return this.httpClient.get(this.API + '/merchant/'+ merchant_id+ '/best-seller-top3');
  }
  finAllByCategory(id: number): Observable<any> {
    return this.httpClient.get(this.API + '/category/' + id)
  }
}
