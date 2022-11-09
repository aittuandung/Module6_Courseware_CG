import {Component, Input, OnInit} from '@angular/core';
import {TokenService} from "../../service/token/token.service";
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../service/orders/order.service";

@Component({
  selector: 'app-order-merchant-detail',
  templateUrl: './order-merchant-detail.component.html',
  styleUrls: ['./order-merchant-detail.component.css']
})
export class OrderMerchantDetailComponent implements OnInit {
  @Input() order_id: any;
  @Input() merchant_name: any;
  @Input() orderStatus_nameOrderStatus: any;
  @Input() merchant_address: any;
  @Input() order_createAt: any;
  constructor(private tokenService: TokenService,
              private activateRoute: ActivatedRoute,
              private orderService: OrderService) { }
  orderDetailByOrder: any;
  total = 0;
  ngOnInit(): void {
    this.orderService.getListOrderDetailByOrder(this.order_id).subscribe((data) => {
      this.orderDetailByOrder = data;
      console.log("order chi tieets lay ra duoc la gi", this.orderDetailByOrder);
      for (let i = 0; i < this.orderDetailByOrder.length; i++) {
        this.total += this.orderDetailByOrder[i].price;
      }
    })
  }
}
