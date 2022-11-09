import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MerchantService} from "../../service/merchant/merchant.service";
import {HttpClient} from "@angular/common/http";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";

// @ts-ignore
@Component({
  selector: 'app-detail-merchant-management',
  templateUrl: './detail-merchant-management.component.html',
  styleUrls: ['./detail-merchant-management.component.css']
})

export class DetailMerchantManagementComponent implements OnInit {
  id: any;
  constructor(private activateRoute: ActivatedRoute,
              private merchantService: MerchantService,
              private  httpClient: HttpClient,
              private foodMerchantService: FoodMerchantService,) {
  }
  merchant: any;
  listFoodMerchant: any;
  p: any;
  ngOnInit(): void {
    this.merchant = {
      name: '', phoneNumber: '', avatar: '', imageBanner: '',
      address: '',
    }
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id');
      this.merchantService.findById(this.id).subscribe((data) => {
        this.merchant = data;
      })
    });
    this.foodMerchantService.findAllByMerchant(this.id).subscribe((data) => {
      this.listFoodMerchant = data['content'];
      // console.log('check data ------>> ', data)
      // console.log('check thang list food ==>> ', this.listFoodMerchant)
    })
  }
  // findAllByMerchant() {
  //   this.foodMerchantService.findAllByMerchant(this.id).subscribe((data) => {
  //     this.listFoodMerchant = data;
  //     console.log('check data ------>> ', data)
  //     console.log('check thang list food ==>> ', this.listFoodMerchant)
  //   })
  // }
}
