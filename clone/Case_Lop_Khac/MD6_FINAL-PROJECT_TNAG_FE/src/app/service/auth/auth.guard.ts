import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {JwtResponse} from "../../model/JwtResponse";
import {AuthService} from "./auth.service";
import {TokenService} from "../token/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {
  }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenService.getToken()) {
      // console.log('vao day khong');
      // this.router.navigate(['/user'])
      return true;
    } else {
      // console.log('vao else khong');
      this.router.navigate(['/login'])
      return false;
    }

  }


}
