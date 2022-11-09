import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MerchantService} from "../../service/merchant/merchant.service";

@Component({
  selector: 'app-detail-merchant',
  templateUrl: './detail-merchant.component.html',
  styleUrls: ['./detail-merchant.component.css']
})
export class DetailMerchantComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
              private merchantService: MerchantService) { }
merchant: any;
  ngOnInit(): void {
    this.merchant = {
      name: '', phoneNumber: '', avatar: '', imageBanner: '',
      address: '',
    }
        this.merchantService.getCurrentMerchant().subscribe((data) => {
          this.merchant = data;
        });
  }

}
