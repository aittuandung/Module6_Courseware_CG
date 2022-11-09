import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './homeshow/home/home.component';
import {MerchantRegisterComponent} from './auth/merchant-register/merchant-register.component';
import {UploadImageComponent} from "./upload/upload-image/upload-image.component";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import {CustomerRegisterComponent} from './auth/customer-register/customer-register.component';
import {MerchantManagementComponent} from "./admin/merchant-management/merchant-management.component";
import {NavbarComponent} from "./share/navbar/navbar.component";
import {FooterComponent} from "./share/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import { CustomerLoginComponent } from './auth/customer-login/customer-login.component';
import { MerchantLoginComponent } from './auth/merchant-login/merchant-login.component';
import { httpInterceptorProviders } from "./security/auth.interceptor";
import { ShowlistFoodComponent } from './homeshow/showlist-food/showlist-food.component';
import { ShowlistRestaurantComponent } from './homeshow/showlist-restaurant/showlist-restaurant.component';
import { DetailRestaurantComponent } from './homeshow/detail-restaurant/detail-restaurant.component';
import { CartDetailRestaurantComponent } from './homeshow/cart-detail-restaurant/cart-detail-restaurant.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {PreOrderUserComponent} from "./homeshow/pre-order-user/pre-order-user.component";
import {DetailFoodComponent} from "./homeshow/detail-food/detail-food.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MerchantRegisterComponent,
    CustomerRegisterComponent,
    HomeComponent,
    DetailFoodComponent,
    CustomerLoginComponent,
    MerchantLoginComponent,
    ShowlistFoodComponent,
    ShowlistRestaurantComponent,
    DetailRestaurantComponent,
    CartDetailRestaurantComponent,
    PreOrderUserComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    CarouselModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  exports: [CartDetailRestaurantComponent,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
