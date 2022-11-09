import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {OwlOptions} from 'ngx-owl-carousel-o';
import {TokenService} from "../../service/token/token.service";
import {CartService} from "../../service/cart/cart.service";

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.css']
})
export class DetailFoodComponent implements OnInit {
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

  constructor(private activateRoute: ActivatedRoute,
              private tokenService: TokenService,
              private foodService: FoodMerchantService,
              private cartService: CartService,
              private router: Router
  ) { }
  food: any;
  listImage: any;
  food_id: any;
  count: any;
  cartDetail: any;
  total: any;
  merchant_id: any;
  ngOnInit(): void {
    this.food = {
      name: '', image: '', description: '', price: '',
      priceDiscount: '',  foodCategory: '',  address: '',  merchant: {},
    }
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
       this.food_id = paraMap.get('id');
    this.foodService.findById(this.food_id).subscribe((data) => {
      this.food = data;
    })
      this.foodService.getListFoodImage(this.food_id).subscribe((image) => {
        this.listImage = image;
        console.log("co lay duoc list anh k", this.listImage)
      })
      this.getCartdetail()
    });

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
  getCartdetail(){
    this.cartService.getCartDetailByFood(this.food_id).subscribe((data) => {
      // console.log("cartdetail lay duoc khong",data)
      this.cartDetail = data;
      this.count = this.cartDetail.length;
      this.total = 0;
      for (let i = 0; i < this.cartDetail.length; i++) {
        this.total += this.cartDetail[i].totalPrice;
      }
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
  addToCart(){
    if (this.isLogin){
      this.cartService.addToCart(this.food_id).subscribe((data) => {
        this.getCartdetail()
      })
    }
    else {
      this.router.navigate(['customer-login']).then(() => {
        window.location.reload();
      });
    }
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    slideBy: 4,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class=\'fa fa-chevron-left\'></i>', '<i class=\'fa fa-chevron-right\'></i>'],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      400: {
        items: 3
      },
      600: {
        items: 4
      }
    },
    nav: true
  }

}
