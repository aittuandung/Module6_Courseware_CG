import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {SignUpFormCustomer} from "../../model/SignUpFormCustomer";
import {AddressCategory} from "../../model/AddressCategory";

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

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
  listAddressCate : AddressCategory[] = [];

  categoryControl = new FormControl('',[
    Validators.required
  ]);

  signUpFormCustomer?: SignUpFormCustomer;

  error1: any = {
    message: "no_password"
  }
  error2: any = {
    message: "no_user"
  }
  success: any = {
    message: "yes"
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.listAddressCategory();
  }

  listAddressCategory() {
    this.authService.listAddressCategory().subscribe(listAddCate => {
      this.listAddressCate = listAddCate;
      // console.log("data =====>", this.listAddressCate)
    })
  }

  register() {
    this.signUpFormCustomer = new SignUpFormCustomer(
      this.form.name,
      this.form.username,
      this.form.phone,
      this.form.address,
      {id: this.form.addressCategory},
      this.form.password,
      this.form.confirmPassword
    )
    this.authService.signUpCustomer(this.signUpFormCustomer).subscribe(data => {
      // console.log("signupform =====>" , this.signUpFormCustomer);
      // console.log("id ====>", this.form.addressCategory);
      // console.log("data ======>", data)
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'Mật khẩu không khớp! Vui lòng thử lại!'
      }
      if (JSON.stringify(data) == JSON.stringify(this.error2)) {
        this.status = 'Người dùng đã tồn tại! Vui lòng thử lại!'
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'Đăng ký người dùng thành công!'
        this.authService.setData(true);
        this.router.navigate(['customer-login']);
      }
    })
  }

}
