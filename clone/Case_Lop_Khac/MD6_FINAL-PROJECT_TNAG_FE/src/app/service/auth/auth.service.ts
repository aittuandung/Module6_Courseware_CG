import {EventEmitter, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignUpFormMerchant} from "../../model/SignUpFormMerchant";
import {BehaviorSubject, Observable} from "rxjs";
import {SignUpFormCustomer} from "../../model/SignUpFormCustomer";
import { SignInForm } from 'src/app/model/SignInForm';
import { JwtResponse } from 'src/app/model/JwtResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private data?: boolean;
  // API LOCAL
  private  API_SIGNUP_MERCHANT = environment.API_LOCAL + 'merchant/signup';
  private API_SIGNUP_CUSTOMER = environment.API_LOCAL + 'customer/signup';
  private  API_SIGNIN_MERCHANT = environment.API_LOCAL + 'merchant/signin';
  private API_SIGNIN_CUSTOMER = environment.API_LOCAL + 'customer/signin';
  private ADDRESS_CATEGORY = environment.API_LOCAL + 'address-category';
  private API_CHANGE_MERCHANT_AVATAR = environment.API_LOCAL + 'merchants/change-avatar';
  private API_CHANGE_CUSTOMER_AVATAR = environment.API_LOCAL + 'customers/change-avatar';
  private API_CHANGE_MERCHANT_PROFILE = environment.API_LOCAL+'merchants/change-profile';
  private API_CHANGE_CUSTOMER_PROFILE = environment.API_LOCAL+'customers/change-profile';
  private API_GET_CURRENT_CUSTOMER = environment.API_LOCAL+'customers/detail';


  constructor(private http: HttpClient) {
  }

  signUpMerchant (signUpMerchant: SignUpFormMerchant): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP_MERCHANT, signUpMerchant);
  }

  signUpCustomer (signUpCustomer: SignUpFormCustomer): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP_CUSTOMER, signUpCustomer);
  }

  listAddressCategory(): Observable<any> {
    return this.http.get<any>(this.ADDRESS_CATEGORY);
  }
  signInMerchant (signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN_MERCHANT, signIn);
  }
  signInCustomer (signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN_CUSTOMER, signIn);
  }
  changeAvatarMerchant(info: any):Observable<JwtResponse>{
    return this.http.put<JwtResponse>(this.API_CHANGE_MERCHANT_AVATAR, info);
  }
  changeAvatarCustomer(info: any):Observable<JwtResponse>{
    return this.http.put<JwtResponse>(this.API_CHANGE_CUSTOMER_AVATAR, info);
  }
  // changeProfileMerchant(info: any):Observable<JwtResponse>{
  //   return this.http.put<JwtResponse>(this.API_CHANGE_MERCHANT_PROFILE, info);
  // }
  changeProfileCustomer(info: any):Observable<JwtResponse>{
    return this.http.put<JwtResponse>(this.API_CHANGE_CUSTOMER_PROFILE, info);
  }

  getCurrentUser(): Observable<JwtResponse> {
    // @ts-ignore
    return this.http.get(this.API_GET_CURRENT_CUSTOMER);
  }


  getData(): boolean {
    // @ts-ignore
    return this.data;
  }

  setData(value: boolean) {
    this.data = value;
  }
}
