import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SellerService} from "../../service/seller/seller.service";
import {AdminService} from "../../service/admin/admin.service";
import {Seller} from "../../model/Seller";

@Component({
  selector: 'app-waiting-accept-seller',
  templateUrl: './waiting-accept-seller.component.html',
  styleUrls: ['./waiting-accept-seller.component.css']
})
export class WaitingAcceptSellerComponent implements OnInit {

  sellers: Seller[] = [];

  constructor (private adminService: AdminService) { }

  ngOnInit(): void {
    this.getRequest();
  }

  getRequest(){
    this.adminService.showListRequestSeller().subscribe(sellers => {
      this.sellers = sellers
    })
  }

  changeIsActive(id: any) {
    this.adminService.acceptSeller(id).subscribe(data => {
      this.getRequest()
    }, error => {
      console.log(error)
    })
  }
}
