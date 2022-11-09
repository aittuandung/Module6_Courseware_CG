import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MerchantServiceService} from "../../service/merchant-service.service";
import {AdminService} from "../../service/admin/admin.service";

@Component({
  selector: 'app-not-allow-merchant-list',
  templateUrl: './not-allow-merchant-list.component.html',
  styleUrls: ['./not-allow-merchant-list.component.css']
})
export class NotAllowMerchantListComponent implements OnInit {
listRequestMerchant: any;
  totalElements: any;
  page: number = 1
  constructor(private httpClient: HttpClient,
              private adminService: AdminService) { }

  ngOnInit(): void {
    this.findAll()
  }
  findAll() {
    this.adminService.showListRequestMerchant().subscribe(data => {
      console.log(data);
      this.listRequestMerchant = data;
      // console.log(this.listRequestMerchant)
      this.totalElements = data.length;
    }, error => {

    })
  }
  acceptMerchant(id: any) {
    // merchant.isActive = !merchant.isActive;
    this.adminService.acceptMerchant(id).subscribe
    (data => {
      window.location.reload();
      this.findAll()
    }, error => {
      console.log(error)
    })
  }
  refuseMerchant(id: any) {
    // merchant.isActive = !merchant.isActive;
    this.adminService.refuseMerchant(id).subscribe
    (data => {
      this.findAll()
      window.location.reload();
    }, error => {
      console.log(error)
    })
  }

}
