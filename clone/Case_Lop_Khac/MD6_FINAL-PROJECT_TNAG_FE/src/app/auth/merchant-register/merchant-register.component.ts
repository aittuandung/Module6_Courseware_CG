import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {SignUpFormMerchant} from "../../model/SignUpFormMerchant";

@Component({
  selector: 'app-merchant-register',
  templateUrl: './merchant-register.component.html',
  styleUrls: ['./merchant-register.component.css']
})
export class MerchantRegisterComponent implements OnInit {
  status = "Xin vui lòng điền đầy đủ để đăng ký!";
  form: any = {};

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{9,10}$/)
  ]);

  signUpFormMerchant?: SignUpFormMerchant;

  error1: any = {
    message: "no_password"
  }
  error2: any = {
    message: "no_request"
  }
  success: any = {
    message: "yes"
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.signUpFormMerchant = new SignUpFormMerchant(
      this.form.name,
      this.form.username,
      this.form.phone,
      this.form.address,
      this.form.openTime,
      this.form.closeTime,
      this.form.password,
      this.form.confirmPassword
    )
    this.authService.signUpMerchant(this.signUpFormMerchant).subscribe(data => {
      console.log("data ======>", data)
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'Mật khẩu không khớp! Vui lòng thử lại!'
      }
      if (JSON.stringify(data) == JSON.stringify(this.error2)) {
        this.status = 'Cửa hàng đã gửi yêu cầu! Vui lòng chờ xác nhận!'
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'Gửi yêu cầu đăng ký cửa hàng thành công!'
        // this.authService.setData(true);
        // this.router.navigate(['customer-login']);
      }
    })
  }

}
