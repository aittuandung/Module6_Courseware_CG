import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private httpClient: HttpClient) { }
  API = 'http://localhost:8080/sellers';
  getCategory():Observable<any>{
    return this.httpClient.get(this.API+`/get-category`)
  }
}
