import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TokenService} from "../../service/token/token.service";
import {CartService} from "../../service/cart/cart.service";
import {CartDetail} from "../../model/CartDetail";

@Component({
  selector: 'app-cart-detail-restaurant',
  templateUrl: './cart-detail-restaurant.component.html',
  styleUrls: ['./cart-detail-restaurant.component.css']
})
export class CartDetailRestaurantComponent implements OnInit {

  @Input() food_id: any;
  value: number = 0;
  cartDetail: any;
  constructor(private tokenService: TokenService,
              private activateRoute: ActivatedRoute,
              private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.findCartDetailByCartAndFood(this.food_id).subscribe((data) => {
     this.value = data.quantity;
      // console.log("gia tri lay ra la", this.value)
      })
  }

}
