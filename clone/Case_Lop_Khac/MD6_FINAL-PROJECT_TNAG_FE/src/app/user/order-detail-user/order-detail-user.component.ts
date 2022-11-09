import {Component, Input, OnInit} from '@angular/core';
import {TokenService} from "../../service/token/token.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../service/cart/cart.service";
import {OrderService} from "../../service/orders/order.service";

@Component({
  selector: 'app-order-detail-user',
  templateUrl: './order-detail-user.component.html',
  styleUrls: ['./order-detail-user.component.css']
})
export class OrderDetailUserComponent implements OnInit {
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
      // console.log("order chi tieets lay ra duoc la gi", this.orderDetailByOrder);
      for (let i = 0; i < this.orderDetailByOrder.length; i++) {
        this.total += this.orderDetailByOrder[i].price;
      }
    })
  }

}
