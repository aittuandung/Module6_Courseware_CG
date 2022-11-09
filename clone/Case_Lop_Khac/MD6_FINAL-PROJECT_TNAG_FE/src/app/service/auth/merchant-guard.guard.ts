import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "../token/token.service";

@Injectable({
  providedIn: 'root'
})
export class MerchantGuardGuard implements CanActivate {
  merchant: any = ["MERCHANT"];
  constructor(private tokenService: TokenService,
              private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.tokenService.getToken()){
      console.log("role lay ra trong guard", this.tokenService.getRoles())
      console.log("kieu json",JSON.stringify(this.tokenService.getRoles()))
      if(JSON.stringify(this.tokenService.getRoles()).includes(this.merchant)){
        console.log('Goi dung la MERCHANT');
        return true;
      }else {
        console.log('**** Goi khong dung MERCHANT');
        this.router.navigate([''])
        return false;
      }
    } else {
      console.log("vào else k lấy được token")
      console.log(this.tokenService.getToken())
      this.router.navigate(['/merchant-login'])
      return false;
    }
  }

}
