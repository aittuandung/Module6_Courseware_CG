import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../../service/orders/order.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-order-merchant-wait-confirm',
  templateUrl: './order-merchant-wait-confirm.component.html',
  styleUrls: ['./order-merchant-wait-confirm.component.css']
})
export class OrderMerchantWaitConfirmComponent implements OnInit {

  API = 'http://localhost:8080/orders';
  listWaitingOrder: any = [];
  p: string | number | undefined;
  form = new FormGroup(
    {name: new FormControl('')}
  );


  constructor(private httpClient: HttpClient,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.showListWaitingOrder();
  }

  showListWaitingOrder() {
    this.orderService.showWaitingOrder().subscribe(data => {
      console.log('data accepted=====', data);
      this.listWaitingOrder = data;
      console.log("listorder====", this.listWaitingOrder)
    })
  }

  acceptOrder(id: number) {
    this.orderService.acceptOrder(id).subscribe(data => {
      console.log("accept-order====", data)
      this.showListWaitingOrder();
    })
  }

  denyOrder(id: number) {
    this.orderService.deny(id).subscribe(data => {
      console.log("deny-order====", data)
      this.showListWaitingOrder();
    })
  }

  searchWaitingList(){
    let searchOrder: any;
    searchOrder = this.form.value.name;
    if (searchOrder != '') {
      this.orderService.searchDenyOrder(searchOrder).subscribe((data) => {
        console.log('check list sau khi search ---> ', data)
        this.listWaitingOrder = data;
      }, error => {
        alert('loi');
      })
    } else {
      this.orderService.showDeniedOrder().subscribe((data) => {
        console.log('check data else ----->> ', data);
        this.listWaitingOrder = data;
      })
    }
  }
}
