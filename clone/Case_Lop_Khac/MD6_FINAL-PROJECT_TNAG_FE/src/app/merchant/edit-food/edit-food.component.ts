import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

import {ActivatedRoute, ParamMap} from "@angular/router";
import {FoodCategoryService} from "../../service/food-category/food-category.service";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {FoodCategory} from "../../model/foodCategory";

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  form = new FormGroup( {
    id: new FormControl(''),
    name: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    priceDiscount: new FormControl(''),
    foodCategoryId: new FormControl(''),
  })
  constructor(private httpClient: HttpClient,
              private foodCategoryService: FoodCategoryService,
              private foodService: FoodMerchantService,
              private activateRoute: ActivatedRoute) { }
  obj: any;
  defaultCategory: any;
  showImage: any;
  mess: any;
  listCategory: FoodCategory[] = [];
  ngOnInit(): void {
    this.foodCategoryService.findAll().subscribe((data) => {
      this.listCategory = data;
    })
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.foodService.findById(id).subscribe((data) => {
        this.defaultCategory = data.foodCategory.id
        this.showImage = data.image;
        // this.form.setValue(data.value)
        this.form = new FormGroup( {
          id: new FormControl(data.id),
          name: new FormControl(data.name),
          image: new FormControl(data.image),
          description: new FormControl(data.description),
          price: new FormControl(data.price),
          priceDiscount: new FormControl(data.priceDiscount),
          foodCategoryId: new FormControl(data.foodCategory.id)
        })
      })
    });
  }
  editImage($event: string) {
    // @ts-ignore
    document.getElementById("food-image").hidden = true;
this.form.value.image = $event
  }
  update() {
    console.log(this.form.value);
    this.obj = {
      id: this.form.value.id,
      name: this.form.value.name,
      image:this.form.value.image,
      description: this.form.value.description,
      price: this.form.value.price,
      priceDiscount: this.form.value.priceDiscount,
      foodCategory:{
        id: this.form.value.foodCategoryId
      },
    }
    console.log("co tao duoc obj khong",this.obj)
    this.foodService.update( this.obj.id,this.obj).subscribe(()=>{
      this.mess = "Sửa thông tin món thành công"
      // this.resetForm();
    }, error => {
      this.mess = "Sửa thông tin lỗi"
    })
  }

  resetForm() {
    this.form.value.name = '',
      this.form.value.description = '',
      this.form.value.price = '',
      this.form.value.priceDiscount = '',

      // this.form.value.foodCategoryId = ''
      this.form.value.image = ''
    // @ts-ignore
    document.getElementById('inputName').innerHTML = '';
    // @ts-ignore
    let test: any = document.getElementById('inputName').innerHTML;
    console.log('check innerHtml ----> ', test)
    console.log('check form reset ===>> ', this.form)
  }


}
