import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {CartService} from "../../service/cart/cart.service";
import {OrderService} from "../../service/orders/order.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {
  form = new FormGroup({
    search: new FormControl('')
  })
  constructor(private activateRoute: ActivatedRoute,
              private orderService: OrderService,
              ) { }
listOrder: any;
  p: any;
  search: any;
  ngOnInit(): void {
    this.findAllOrderOfCustomer();
  }
  findAllOrderOfCustomer(){
    this.orderService.findAllOrderOfCustomer().subscribe((data) => {
      this.listOrder = data;
      // console.log("listoder lay ra", this.listOrder)
    })
  }
  searchOrder() {
    this.search = this.form.value.search;
    if (this.search != '') {
      // console.log(' lay duoc gia tri search', this.search)
      this.orderService.getListOrderbyCustomerSearch(this.search).subscribe((data) => {
        // console.log('check list sau khi search ---> ', data)
        this.listOrder = data;
      }, error => {
        // alert('loi');
      })
    } else {
      this.orderService.findAllOrderOfCustomer().subscribe((data) => {
        // console.log('check data else ----->> ', data);
        this.listOrder = data;
      })
      this.findAllOrderOfCustomer();
    }

  }


}
