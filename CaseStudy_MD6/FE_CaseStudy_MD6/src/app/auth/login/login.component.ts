import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(50)]),
    password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
  })

  login(){
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe((data)=>{
        if (data != null) {
          this.loginService.setUserToken(data);
          this.loginService.setToken(data.token);
          this.loginService.check = true;

          if (data.roles[0].name == "ROLE_SELLER") {
            this.router.navigate(["/seller"]);
          } else if (data.roles[0].name == "ROLE_ADMIN") {
            this.router.navigate(["/admin"]);
          } else {
            this.router.navigate(["/"]);
          }

        } else {
          alert("Email or password is wrong, please re-enter!");
          this.router.navigate(["/login"]);
        }

      })
    } else {
      alert("Please checkout form!");
      this.router.navigate(["/login"]);
    }

  }

}
