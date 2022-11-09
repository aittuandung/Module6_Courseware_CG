import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {MerchantService} from "../../service/merchant/merchant.service";
import {CartDetail} from "../../model/CartDetail";
import {CartService} from "../../service/cart/cart.service";

@Component({
  selector: 'app-listcart-user',
  templateUrl: './listcart-user.component.html',
  styleUrls: ['./listcart-user.component.css']
})
export class ListcartUserComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private foodService: FoodMerchantService,
    private cartService: CartService,
    private merchantService: MerchantService,
  ) { }
  listRestaurant: any;
  // @ts-ignore
  cartDetailByMerchant: any[];
  total: any;
  p: any;
  ngOnInit(): void {
    this.cartService.getListMerchantInCart().subscribe((data) => {
      this.listRestaurant = data;
      for (let i = 0; i < this.listRestaurant.length; i++) {
        console.log("id nha hang ", this.listRestaurant[i].id)
      // this.cartService.getCartDetailByCartAndMerchant(this.listRestaurant[i].id).subscribe((data) => {
      //   const cartDetail: any = data;
        // console.log("detail 1 nha hang",cartDetail)
      // });
      }
    })
  }

}
