import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../../service/orders/order.service";
import {databaseInstanceFactory} from "@angular/fire/database/database.module";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-order-merchant-cancel',
  templateUrl: './order-merchant-cancel.component.html',
  styleUrls: ['./order-merchant-cancel.component.css']
})
export class OrderMerchantCancelComponent implements OnInit {

  API = 'http://localhost:8080/orders';
  listCanceledOrder: any = [];
  p: string | number | undefined;
  form = new FormGroup(
    {name: new FormControl('')}
  );

  constructor(private httpClient: HttpClient,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.showListDenyOrder();
  }

  showListDenyOrder(){
    this.orderService.showDeniedOrder().subscribe(data => {
      console.log('data accepted=====',data);
      this.listCanceledOrder = data;
    })
  }

  searchDenyList(){
    let searchOrder: any;
    searchOrder = this.form.value.name;
    if (searchOrder != '') {
      this.orderService.searchDenyOrder(searchOrder).subscribe((data) => {
        console.log('check list sau khi search ---> ', data)
        this.listCanceledOrder = data;
      }, error => {
        alert('loi');
      })
    } else {
      this.orderService.showDeniedOrder().subscribe((data) => {
        console.log('check data else ----->> ', data);
        this.listCanceledOrder = data;
      })
    }
  }
}
