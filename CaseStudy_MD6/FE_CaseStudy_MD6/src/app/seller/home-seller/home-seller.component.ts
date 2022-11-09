import { Component, OnInit } from '@angular/core';
import {SellerService} from "../../service/seller/seller.service";
import {Seller} from "../../model/Seller";
import {LoginService} from "../../service/login/login.service";

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.component.html',
  styleUrls: ['./home-seller.component.css']
})
export class HomeSellerComponent implements OnInit {

  constructor(private sellerService: SellerService,private loginService: LoginService) { }
  seller! : Seller;
  ngOnInit(): void {
    this.sellerService.getThisSeller(this.loginService.getUserToken().id).subscribe((data) => {
      this.seller = data;
      console.log(this.seller)
    })
  }
}
