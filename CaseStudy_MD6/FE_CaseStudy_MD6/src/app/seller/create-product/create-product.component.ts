import {Component, OnInit} from '@angular/core';
import {finalize, Observable} from "rxjs";
import {Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {SellerService} from "../../service/seller/seller.service";
import {ProductCategory} from "../../model/ProductCategory";
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {LoginService} from "../../service/login/login.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  title = "cloudsSorage";
  fb: string = "https://icon-library.com/images/user-icon-jpg/user-icon-jpg-24.jpg";
  downloadURL: Observable<string> | undefined;
  onFileSelected(event: Event) {
    var n = Date.now();
    // @ts-ignore
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  check: boolean = false;

  constructor(private sellerService: SellerService, private router: Router, private storage: AngularFireStorage,
              private productCategoryService: ProductCategoryService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.getCategory()
  }

  productCategories: ProductCategory[] = [];
  getCategory() {
    this.productCategoryService.getCategory().subscribe(data => {
      this.productCategories = data;
    })
  }

  createProductForm = new FormGroup({
    name: new FormControl("", Validators.required),
    productCategory: new FormControl(""),
    price: new FormControl("", Validators.required),
    quantityStorage: new FormControl("", [Validators.required, Validators.pattern("([1-9]|[1-9][0-9]|[1-9][0-9][0-9])")]),
    image: new FormControl(""),
    description: new FormControl("", Validators.required),
  })


  createProduct() {
    let userID = this.loginService.getUserToken().id;
    let productToCreate = this.createProductForm.value;
    console.log("product to create: ", productToCreate)
    if (this.createProductForm.valid) {
      this.createProductForm.get("image")?.setValue(this.fb);
      this.sellerService.createProduct(productToCreate, userID).subscribe((data) => {
        console.log("data");
        console.log(data);
        this.router.navigate(["/seller"]);
      })
    } else {
      alert("Please checkout form!");
      this.router.navigate(["/seller/create-product"]);
    }
  }
}
