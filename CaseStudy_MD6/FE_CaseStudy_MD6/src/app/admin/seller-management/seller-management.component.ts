import { Component, OnInit } from '@angular/core';
import {Page} from "../../model/Page";
import {AdminService} from "../../service/admin/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ScriptService} from "../../script.service";
import {Seller} from "../../model/Seller";



@Component({
  selector: 'app-seller-management',
  templateUrl: './seller-management.component.html',
  styleUrls: ['./seller-management.component.css']
})
export class SellerManagementComponent implements OnInit {

  constructor(private script: ScriptService, private adminService: AdminService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  page!: Page;
  sellers: Seller[] = []
  ngOnInit(): void {
    // this.script.load('googleapis',
    //   'bootstrapcdn', 'min', 'bundle', 'select2', 'owl-carousel', 'owl-carousel', 'custom', 'loader').then(data => {
    // }).catch(error => console.log(error));
    this.adminService.showActiveSeller(0).subscribe((data) => {
      this.page = data
      this.sellers = this.page.content;
    })
  }

  showActiveSeller(page: number){
    if (page >= 0 && this.page.totalPages) {
      this.adminService.showActiveSeller(page).subscribe((data) => {
        this.page = data;
        this.sellers = this.page.content;
      })
    }
  }
  counter(i: number) {
    return new Array(i);
  }

  deleteSeller(id: any) {
    this.adminService.deleteSeller(id).subscribe(data => {
      this.showActiveSeller(0);
      this.router.navigate(['/admin']);
    }, e => console.log(e));
  }

}
