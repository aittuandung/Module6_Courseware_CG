import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MerchantService} from "../../service/merchant/merchant.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  form = new FormGroup( {
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
  })
  mess: any;
  obj: any;
  customer: any;
  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((data) => {
      this.customer = data;
      console.log("detail====",data)
      this.form = new FormGroup( {
        name: new FormControl(data.name),
        phoneNumber: new FormControl(data.phoneNumber),
      })
    })
  }
  update() {
    // console.log(this.form.value);
    this.obj = {
      name: this.form.value.name,
      phoneNumber: this.form.value.phoneNumber,
    }
    this.authService.changeProfileCustomer(this.obj).subscribe(()=>{
      this.mess = "Sửa thông tin thành công"
      window.location.reload();
    }, error => {
      this.mess = "Sửa thông tin lỗi"
    })
  }

}
