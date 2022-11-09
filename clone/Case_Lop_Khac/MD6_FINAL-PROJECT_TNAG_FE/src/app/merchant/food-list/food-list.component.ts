import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {MerchantService} from "../../service/merchant/merchant.service";
import {FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  listFoodMerchant: any;
  listMerchant: any;
  merchant: any;
  merchant_name: any;
  p: any;
  form = new FormGroup({
    name: new FormControl('')
  })


  constructor(private  httpClient: HttpClient,
              private foodMerchantService: FoodMerchantService,
              private merchantService: MerchantService) { }

  ngOnInit(): void {
    this.findAllMerchant();
    this.findAllByMerchant();
    // location.reload();
  }

  checkMerchant() {
    for (let i = 0; i < this.listMerchant.length; i++) {
      if (this.listMerchant[i].get().getId() == 1) {
        this.merchant = this.listMerchant[i].get();
      }
    }
  }

  findAllMerchant() {
    this.merchantService.getCurrentMerchant().subscribe((data) => {
      this.merchant = data;
      console.log('check listMerchant ------>> ', data)
// location.reload()
    })
  }

  findAllByMerchant() {
    this.foodMerchantService.findAll().subscribe((data) => {
      this.listFoodMerchant = data;
      console.log('check data ------>> ', data)
      console.log('check thang list food ==>> ', this.listFoodMerchant)
    })
  }

  deleteFood(id: number) {
    this.foodMerchantService.delete(id).subscribe((data) => {
      // console.log('check thang vua xoa ----->', data)
      // console.log('check thu id ----->> ', id)
      this.findAllByMerchant()
    })
    this.findAllByMerchant()
  }
  searchByFoodName() {
    let name_food: any;
    name_food = this.form.value.name;
    if (name_food != '') {
      this.foodMerchantService.searchByFoodName(name_food,1).subscribe((data) => {
        console.log('check list sau khi search ---> ', data['content'])
        this.listFoodMerchant = data['content'];
      }, error => {
        alert('loi');
      })
    } else {
      this.foodMerchantService.findAll().subscribe((data) => {
        console.log('check data else ----->> ', data);
        this.listFoodMerchant = data['content'];
      })
      this.findAllByMerchant();
    }

  }

}
