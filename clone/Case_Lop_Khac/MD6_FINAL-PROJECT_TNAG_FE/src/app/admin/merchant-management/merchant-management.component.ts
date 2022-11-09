import {Component, OnInit} from '@angular/core';
import {MerchantServiceService} from "../../service/merchant-service.service";
import {HttpClient} from "@angular/common/http";
import {Merchant} from "../../model/merchant";
import {MerchantService} from "../../service/merchant/merchant.service";

@Component({
  selector: 'app-merchant-management',
  templateUrl: './merchant-management.component.html',
  styleUrls: ['./merchant-management.component.css']
})
export class MerchantManagementComponent implements OnInit {
  totalElements: any;
  page: number = 1
  listMerchant: any;
  constructor(private httpClient: HttpClient,
              private merchantService: MerchantService) {
  }

  ngOnInit(): void {
    this.findAll()
  }
  findAll() {
    this.merchantService.findAll().subscribe(data => {
      console.log(data);
      this.listMerchant = data['content'];
      console.log(this.listMerchant)
      this.totalElements = data['content'].length;
    }, error => {

    })
  }



  changeIsActive(id: any, status: any) {
    // merchant.isActive = !merchant.isActive;
    // console.log(merchant)
    this.merchantService.updateActiveMerchant(id, status).subscribe
    (data => {
      this.findAll()
    }, error => {
      console.log(error)
    })
  }

  changeGoldMarchant(id: any, status1: any) {
    // merchant.isActive = !merchant.isActive;
    // console.log(merchant)
    this.merchantService.updateGoldMerchant(id, status1).subscribe
    (data => {
      this.findAll()
    }, error => {
      console.log(error)
    })
  }

}
