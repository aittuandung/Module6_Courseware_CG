import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInForm } from 'src/app/model/SignInForm';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TokenService } from 'src/app/service/token/token.service';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  status = 'Điền thông tin để đăng nhập -->';
  form: any = {};
  hide = true;
  isLogin = false;
  check = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  // @ts-ignore
  signInForm: SignInForm;
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.authService.getData()) {
      this.check = true;
    }
  }
  ngSubmit() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    // console.log("co submit duoc signin form k", this.signInForm)

    this.authService.signInCustomer(this.signInForm).subscribe(data => {
      if (data.token != undefined) {
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setRoles(data.roles);
        this.tokenService.setAvatar(data.avatar);
        if(JSON.stringify(this.tokenService.getRoles())==JSON.stringify(["ADMIN"])){
          this.router.navigate(['admin']).then(() => {
            window.location.reload();
          });
        }else {
          this.router.navigate(['']).then(() => {
            window.location.reload();
          });
        }
      } else {
        this.isLogin = true;
        this.status = 'Đăng nhập không thành công! Mật khẩu hoặc tên đăng nhập không đúng!'
      }
    })
  }

}
