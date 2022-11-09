import {Component, Input, OnInit} from '@angular/core';
import {TokenService} from "../../service/token/token.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../service/cart/cart.service";
import {OrderService} from "../../service/orders/order.service";
import {CartDetail} from "../../model/CartDetail";

@Component({
  selector: 'app-cart-detail-user',
  templateUrl: './cart-detail-user.component.html',
  styleUrls: ['./cart-detail-user.component.css']
})
export class CartDetailUserComponent implements OnInit {
  @Input() merchant_id: any;
  @Input() merchant_name: any;
  constructor(private tokenService: TokenService,
              private activateRoute: ActivatedRoute,
              private orderService: OrderService,
              private cartService: CartService) { }
  cartDetailByMerchant: any;
  cartDetailDTO: any = [];
  // @ts-ignore
  total = 0;
  pretotal = 0;
  ngOnInit(): void {
    this.getCartDetailByCartAndMerchant(this.merchant_id);
  }
  getCartDetailByCartAndMerchant(merchant_id: any){
    this.cartService.getCartDetailByCartAndMerchant(merchant_id).subscribe((data) => {
      this.cartDetailByMerchant = data;
      for (let i = 0; i < this.cartDetailByMerchant.length; i++) {
        this.total += this.cartDetailByMerchant[i].totalPrice;
      }
    });
  }
  decreaseFromCart(id: any){
    this.cartService.decreaseFromCart(id).subscribe((data) => {
      this.getCartDetailByCartAndMerchant(this.merchant_id)
    })
  }
  increaseFromCart(id: any){
    this.cartService.increaseFromCart(id).subscribe((data) => {
      this.getCartDetailByCartAndMerchant(this.merchant_id)
    })
  }

  getCartDTO(){
    this.cartDetailDTO = [];
    this.pretotal = 0;
    // this.cartDetailDTO = this.cartDetailByMerchant
    //   .filter((cart: { checked: any; }) => cart.checked)
    //   .map((cart: { value: any; }) => cart.value)
    for (let i = 0; i < this.cartDetailByMerchant.length; i++) {
      // @ts-ignore
      if (document.getElementById("cart-detail-user-"+this.cartDetailByMerchant[i].id).checked){
        this.cartDetailDTO.push(this.cartDetailByMerchant[i])
      }
      console.log("co tao duoc list cartdetail k", this.cartDetailDTO)
    }
    for (let i = 0; i < this.cartDetailDTO.length; i++) {
      this.pretotal += this.cartDetailDTO[i].totalPrice;
      console.log("gia la bn", this.pretotal)
    }
  }

  createOrder(){
    // @ts-ignore
    this.orderService.createOrder(this.merchant_id,{"cartDetails": this.cartDetailDTO}).subscribe((data) => {
      this.getCartDetailByCartAndMerchant(this.merchant_id);
      window.location.reload();
    })
  }

  deleteFromCart(id: any) {
    this.cartService.deleteCartDetailById(id).subscribe((data) => {
      this.getCartDetailByCartAndMerchant(this.merchant_id)
      window.location.reload();
    })
  }
}
