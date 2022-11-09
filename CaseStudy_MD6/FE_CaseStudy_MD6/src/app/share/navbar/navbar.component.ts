import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  logOut() {
    this.loginService.deleteUserToken();
    this.loginService.deleteToken();
    this.loginService.check = false;
    this.router.navigate(["/"]);
  }


}
