import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {MerchantService} from "../../service/merchant/merchant.service";
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listFood: any;
  listSoldTop8: any;
  listNewFood: any;
  listGoldMerchant: any;
  constructor(private httpClient: HttpClient,
              private foodMerchantService: FoodMerchantService,
              private merchantService: MerchantService) {
  }

  ngOnInit(): void {
    // this.foodMerchantService.findAllFood().subscribe((data) => {
    //   this.listFood = data;
    // })
    this.showListTop8();
    this.showNewFood();
    this.showListGoldMerchant();
  }

  showListTop8() {
    this.foodMerchantService.listSoldTop8().subscribe(data => {
      console.log(data);
      this.listSoldTop8 = data;
      console.log(this.listSoldTop8)
    }, error => {

    })
  }

  showNewFood() {
    this.foodMerchantService.listNewFood().subscribe(data => {
      console.log("test list ==========>",data);
      this.listNewFood = data;
      console.log(this.listNewFood)
    }, error => {

    })
  }

  showListGoldMerchant() {
    this.merchantService.showGoldMerchant().subscribe(data =>{
      console.log("aaaaaaaaa+++++++",data)
      this.listGoldMerchant = data;
    }, error => {

    })
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


