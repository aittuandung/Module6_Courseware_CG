import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UploadImageComponent} from "../upload/upload-image/upload-image.component";
import {HomweUserComponent} from "./homwe-user/homwe-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListcartUserComponent } from './listcart-user/listcart-user.component';
import {NgxPaginationModule} from "ngx-pagination";
import { OrderUserComponent } from './order-user/order-user.component';
import { OrderDetailUserComponent } from './order-detail-user/order-detail-user.component';
import { CartDetailUserComponent } from './cart-detail-user/cart-detail-user.component';
import { PreOrderUserComponent } from '../homeshow/pre-order-user/pre-order-user.component';
import { EditUserAvatarComponent } from './edit-user-avatar/edit-user-avatar.component';
import {MerchantModule} from "../merchant/merchant.module";


@NgModule({
  declarations: [
    HomweUserComponent,
    EditUserComponent,
    DetailUserComponent,
    ListcartUserComponent,
    OrderUserComponent,
    OrderDetailUserComponent,
    CartDetailUserComponent,
    EditUserAvatarComponent,
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        FormsModule,
        MerchantModule
    ],
  exports: [
    UploadImageComponent
  ]
})
export class UserModule { }
