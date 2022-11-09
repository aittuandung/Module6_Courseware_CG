import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../../service/orders/order.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-order-merchant-completed',
  templateUrl: './order-merchant-completed.component.html',
  styleUrls: ['./order-merchant-completed.component.css']
})
export class OrderMerchantCompletedComponent implements OnInit {
  API = 'http://localhost:8080/orders';
  listAcceptedOrder: any =[];
  p: string | number | undefined;
  form = new FormGroup(
    {name: new FormControl('')}
  );

  constructor(private httpClient: HttpClient,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.showListAcceptedOrder();
  }

  showListAcceptedOrder(){
    this.orderService.showAcceptedOrder().subscribe(data => {
      console.log('data accepted=====',data);
      this.listAcceptedOrder = data;
      console.log("listorder====", this.listAcceptedOrder)
    })
  }

  searchAcceptList(){
    let searchOrder: any;
    searchOrder = this.form.value.name;
    if (searchOrder != '') {
      this.orderService.searchDenyOrder(searchOrder).subscribe((data) => {
        console.log('check list sau khi search ---> ', data)
        this.listAcceptedOrder = data;
      }, error => {
        alert('loi');
      })
    } else {
      this.orderService.showDeniedOrder().subscribe((data) => {
        console.log('check data else ----->> ', data);
        this.listAcceptedOrder = data;
      })
    }
  }

}
