import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {FoodMerchantService} from "../../service/merchant-food/food-merchant.service";
import {FoodCategoryService} from "../../service/food-category/food-category.service";

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {

  listCategory: any;
  // @ts-ignore
  maxCategory: number;
  mess: any;
  obj: any;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    priceDiscount: new FormControl('', [Validators.required]),
    foodCategoryId: new FormControl('', [Validators.required, Validators.min(1), Validators.max(4)]),
    image: new FormControl(''),
  })

  constructor(private httpClient: HttpClient,
              private foodMerchantService: FoodMerchantService,
              private foodCategoryService: FoodCategoryService) {
  }

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  get price() {
    return this.form.get('price');
  }

  get priceDiscount() {
    return this.form.get('priceDiscount');
  }

  get foodCategoryId() {
    return this.form.get('foodCategoryId');
  }

  ngOnInit(): void {
    this.findAllCategory();
  }

  findAllCategory() {
    this.foodCategoryService.findAll().subscribe((data) => {
      // console.log('check data category -----------> ', data)
      // console.log('check length data category -------------->> ', data.length)
      // for (let i = 0; i < data.length; i++) {
      //   this.listCategory.push(data[i].name)
      // }
      this.listCategory = data;
      // console.log('check list category ----------->> ', this.listCategory);
      this.maxCategory = this.listCategory[this.listCategory.size - 1].id;
      console.log("max id category", this.maxCategory)
    })

  }

  // @ts-ignore
  uploadImage($event) {
    this.form.value.image = $event;
  }

  createFood() {
    this.obj = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      priceDiscount: this.form.value.priceDiscount,
      foodCategory: {
        id: this.form.value.foodCategoryId
      },
      image: this.form.value.image,
    }
    this.foodMerchantService.create(this.obj, 1).subscribe((data) => {
      console.log('check data trong createFood ------->> ', data)
      // alert('Khởi tạo thành công!');
      this.mess = "Thêm món mới thành công"
    }, error => {
      // alert('Lỗi!');
      this.mess = "Thêm món không thành công"
    })
    console.log('check obj --------==>> ', this.obj)
    console.log('list sau khi create====', this.foodMerchantService.findAll());
    // location.reload()
    // this.form.value.name = '',
    //   this.form.value.description = '',
    //   this.form.value.price = '',
    //   this.form.value.priceDiscount = '',
    //
    //   this.form.value.foodCategoryId = ''
    // this.form.value.image = ''
    // console.log(this.form)

  }


}
