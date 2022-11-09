import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token/token.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {CartService} from "../../service/cart/cart.service";
import {MerchantService} from "../../service/merchant/merchant.service";

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.css']
})
export class DetailRestaurantComponent implements OnInit {
  // @ts-ignore
  token: any;
  // @ts-ignore
  name: string;
  isLogin = false;
  // @ts-ignore
  avatar: string;
  admin = ["ADMIN"];
  merchant = ["MERCHANT"];
  user = ["USER"];
  isCheckAdmin = false;
  isMerchant = false;
  isUser = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private tokenService: TokenService,
    private foodService: FoodMerchantService,
    private cartService: CartService,
    private merchantService: MerchantService,
    private router: Router,
  ) { }

  restaurant: any;
  listImage: any;
  listFood: any;
  restaurant_id: any;
  count: any;
  cartDetail: any;
  total: any;
  top3_restaurant: any;
  ngOnInit(): void {
    this.restaurant = {
      name: '', phoneNumber: '', avatar: '', imageBanner: '',
      openTime: '',  closeTime: '',  address: '',
    }

    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.restaurant_id = paraMap.get('id');
      this.merchantService.findById(this.restaurant_id).subscribe((data) => {
        this.restaurant = data;
      })
      this.getCartdetail();
     this.getFoodList();

    });
    // console.log("lay id merchant hien tai", this.restaurant_id)
    this.foodService.listSoldTop3ByMerchant(this.restaurant_id).subscribe((data) => {
      this.top3_restaurant = data;
      // console.log("lay duoc top 3 ban chay k", this.top3_restaurant)
    })

    if (this.tokenService.getToken()) {
    // console.log("token lay ra", this.tokenService.getRoles())
    this.name = this.tokenService.getName();
    this.avatar = this.tokenService.getAvatar();
    this.isLogin = true;
    if (JSON.stringify(this.tokenService.getRoles()) == JSON.stringify(this.admin)) {
      // console.log("co check duoc role k")
      this.isCheckAdmin = true;
    } else { // @ts-ignore
      if (JSON.stringify(this.tokenService.getRoles()).includes(this.merchant) && JSON.stringify(this.tokenService.getRoles()).includes(this.user)) {
        this.isMerchant = true;
        this.isUser = true;
        // console.log("check merchant login hay chua", this.isMerchant)
      } else { // @ts-ignore
        if (JSON.stringify(this.tokenService.getRoles()).includes(this.merchant)) {
          // console.log("aaaaaaaaaaaaaa")
          this.isMerchant = true;

        } else {
          this.isUser = true;
        }
      }
    }
  }
  }
  getFoodList(){
    this.foodService.findAllByMerchant(this.restaurant_id).subscribe((data) => {
      this.listFood = data['content'];
      // console.log("lay ra duoc listfood", data)
      for (let j = 0; j < this.cartDetail.length; j++) {
      for (let i = 0; i < this.listFood.length; i++) {

          if (this.listFood[i].id==this.cartDetail[j].food.id){
            // console.log("vao if duoc khong",this.listFood[i].id );
            // this.listFood[i].cartQuantity = this.cartDetail[j].quantity;
            // console.log("so luong",this.listFood[i].cartQuantity )
            // console.log("list sau cung", this.listFood[i])
          }else {
            this.listFood[i].cartQuantity = 0;
          }
        }
      }

    })
  }
  getCartdetail(){
    this.cartService.getCartDetailByCartAndMerchant(this.restaurant_id).subscribe((data) => {
      // console.log("cartdetail lay duoc khong",data)
      this.cartDetail = data;
      this.count = this.cartDetail.length;
      this.total = 0;
      for (let i = 0; i < this.cartDetail.length; i++) {
        this.total += this.cartDetail[i].totalPrice;
      }
      this.getFoodList();
    })
  };
  decreaseFromCart(id: any){
    this.cartService.decreaseFromCart(id).subscribe((data) => {
      this.getCartdetail()

    })
  }
  increaseFromCart(id: any){
    this.cartService.increaseFromCart(id).subscribe((data) => {
      this.getCartdetail()

    })
  }
  addToCart(food_id: any){
    if (this.isLogin){
    this.cartService.addToCart(food_id).subscribe((data) => {
      this.getCartdetail();
    })
    }
    else {
      this.router.navigate(['customer-login']).then(() => {
        window.location.reload();
      });
    }
  }

}
