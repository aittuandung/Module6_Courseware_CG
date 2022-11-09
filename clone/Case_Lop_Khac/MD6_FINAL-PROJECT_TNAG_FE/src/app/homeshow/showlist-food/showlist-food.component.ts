import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodCategoryService} from "../../service/food-category/food-category.service";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-showlist-food',
  templateUrl: './showlist-food.component.html',
  styleUrls: ['./showlist-food.component.css']
})
export class ShowlistFoodComponent implements OnInit {
  listFood: any;
  p: any;
  listFoodCategory: any;
  select: any;
  option: any;
  form = new FormGroup( {
    name: new FormControl('')
  })

  constructor(private httpClient: HttpClient,
              private foodCategoryService: FoodCategoryService,
              private foodMerchantService: FoodMerchantService) {
  }

  ngOnInit(): void {
    this.showAllFood();
    this.showAllCategory();

  }

  showAllCategory() {
    this.foodCategoryService.findAll().subscribe((data) => {
      this.listFoodCategory = data;
      console.log('check list category ----->> ', this.listFoodCategory)
    });
  }

  update() {
    // @ts-ignore
    this.option = document.getElementById('language').value;
    console.log('check option ===>> ', this.option)
    if (this.option == 0) {
      this.showAllFood();
    } else {
      this.findAllByCategory(this.option);
    }
  }

  findAllByCategory(id: number) {
    this.foodMerchantService.finAllByCategory(id).subscribe((data) => {
      this.listFood = data;
      console.log('check list sau khi select ---->> ', this.listFood)
    })
  }

  showAllFood() {
    this.foodMerchantService.findALlByUser().subscribe((data) => {
      console.log('check all list food ------->> ', data)
      this.listFood = data;
      console.log('check list food =========>> ', this.listFood)
    })
  }

  searchByFoodNameUser() {
    let name_food: any;
    name_food = this.form.value.name;
    if (name_food != '') {
      this.foodMerchantService.searchByFoodNameByUser(name_food).subscribe((data) => {
        console.log('check list sau khi search ---> ', data)
        this.listFood = data;
      }, error => {
        // alert('loi');
      })
    } else {
      this.showAllFood();
    }

  }
}
