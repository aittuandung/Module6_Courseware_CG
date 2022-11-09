import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { FooterComponent } from './share/footer/footer.component';
import { UploadImageComponent } from './upload/upload-image/upload-image.component';
import { HomeComponent } from './homeshow/home/home.component';
import { DetailProductComponent } from './homeshow/detail-product/detail-product.component';
import { CustomerRegisterComponent } from './auth/customer-register/customer-register.component';
import { SellerRegisterComponent } from './auth/seller-register/seller-register.component';
import { ShowlistSellerComponent } from './homeshow/showlist-seller/showlist-seller.component';
import { DetailSellerComponent } from './homeshow/detail-seller/detail-seller.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './auth/login/login.component';
import {RouterModule} from "@angular/router";
import {AuthInterceptor} from "./auth.interceptor";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        UploadImageComponent,
        HomeComponent,
        DetailProductComponent,
        CustomerRegisterComponent,

        SellerRegisterComponent,

        ShowlistSellerComponent,
        DetailSellerComponent,

        LoginComponent
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule,
        // NgxPaginationModule,
        AppRoutingModule,
        RouterModule,
        // CarouselModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
    ],

    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }
    ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
