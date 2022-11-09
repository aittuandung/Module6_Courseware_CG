import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "../token/token.service";

@Injectable({
  providedIn: 'root'
})
export class RoleAuthGuard implements CanActivate {
  admin: any = ["ADMIN"];
  constructor(private tokenService: TokenService,
              private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.tokenService.getToken()){
      if(JSON.stringify(this.tokenService.getRoles())==JSON.stringify(this.admin)){
        // console.log('Goi dung la ADMIN');
        return true;
      }else {
        // console.log('**** Goi khong dung ADMIN');
        this.router.navigate([''])
        return false;
      }
    } else {
      this.router.navigate(['/customer-login'])
      return false;
    }
  }

}
