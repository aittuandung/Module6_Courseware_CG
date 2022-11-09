import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {MerchantService} from "../../service/merchant/merchant.service";

@Component({
  selector: 'app-homwe-user',
  templateUrl: './homwe-user.component.html',
  styleUrls: ['./homwe-user.component.css']
})
export class HomweUserComponent implements OnInit {
  listFood: any;
  constructor(private  httpClient: HttpClient,
              private foodMerchantService: FoodMerchantService,
              private merchantService: MerchantService) { }

  ngOnInit(): void {
    this.foodMerchantService.findAllFood().subscribe((data) => {
      this.listFood = data;
    })
  }

}
