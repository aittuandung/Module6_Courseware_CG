import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";
import {ScriptService} from "../../script.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Page} from "../../model/Page";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // products: Product[] = [];
  //
  // constructor (private sellerService: SellerService, public loginService : LoginService) { }
  //
  // ngOnInit(): void {
  //   this.getRequest();
  // }
  //
  // getRequest(){
  //   this.sellerService.showListProducts(this.loginService.getUserToken().name).subscribe(products => {
  //     this.products = products;
  //   })
  // }
  constructor(private script: ScriptService, private sellerService: SellerService,public loginService : LoginService,private activatedRoute: ActivatedRoute,
              private router: Router) { }
  p: any;
  products: Product[] = []
  ngOnInit(): void {
    console.log("username: ", this.loginService.getUserToken().username)
    this.sellerService.showListProducts(this.loginService.getUserToken().username, 0 ).subscribe((data) => {
      this.products = data.content;
      console.log(this.products)
    })
  }
}
