import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MerchantService } from 'src/app/service/merchant/merchant.service';


@Component({
  selector: 'app-edit-merchant',
  templateUrl: './edit-merchant.component.html',
  styleUrls: ['./edit-merchant.component.css']
})
export class EditMerchantComponent implements OnInit {
  form = new FormGroup( {
    name: new FormControl(''),
    openTime: new FormControl(''),
    closeTime: new FormControl(''),
    address: new FormControl('')
  })
 mess: any;

  constructor(private httpClient: HttpClient,
              private merchantService: MerchantService,
              private activateRoute: ActivatedRoute) { }
  obj: any;
  merchant: any;
  ngOnInit(): void {

      this.merchantService.getCurrentMerchant().subscribe((data) => {
        this.merchant = data;
        // console.log("detail====",data)
        this.form = new FormGroup( {
          name: new FormControl(data.name),
          openTime: new FormControl(data.openTime),
          closeTime: new FormControl(data.closeTime),
          address: new FormControl(data.address)
        })
      })
  }
  update() {
    // console.log(this.form.value);
    this.obj = {
      name: this.form.value.name,
      openTime: this.form.value.openTime,
      closeTime: this.form.value.closeTime,
      address: this.form.value.address,
    }
    this.merchantService.update(this.obj).subscribe(()=>{
      this.mess = "Sửa thông tin thành công"
      window.location.reload();
    }, error => {
      this.mess = "Sửa thông tin lỗi"
    })
  }

}
