import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import {HomeMerchantComponent} from "./home-merchant/home-merchant.component";
import {FoodListComponent} from "./food-list/food-list.component";
import {EditMerchantComponent} from "./edit-merchant/edit-merchant.component";
import {CreateFoodComponent} from "./create-food/create-food.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditFoodComponent } from './edit-food/edit-food.component';
import {NgxPaginationModule} from "ngx-pagination";
import {AppModule} from "../app.module";
import {UploadImageComponent} from "../upload/upload-image/upload-image.component";
import { DetailMerchantComponent } from './detail-merchant/detail-merchant.component';
import { EditMerchantBannerComponent } from './edit-merchant-banner/edit-merchant-banner.component';
import { EditMerchantAvatarComponent } from './edit-merchant-avatar/edit-merchant-avatar.component';
import { DetailFoodComponent } from '../homeshow/detail-food/detail-food.component';
import { OderMerchantComponent } from './oder-merchant/oder-merchant.component';
import { OrderMerchantWaitConfirmComponent } from './order-merchant-wait-confirm/order-merchant-wait-confirm.component';
import { OrderMerchantCompletedComponent } from './order-merchant-completed/order-merchant-completed.component';
import { OrderMerchantCancelComponent } from './order-merchant-cancel/order-merchant-cancel.component';
import { OrderMerchantDetailComponent } from './order-merchant-detail/order-merchant-detail.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {CartDetailRestaurantComponent} from "../homeshow/cart-detail-restaurant/cart-detail-restaurant.component";
import { ReveneuComponent } from './reveneu/reveneu.component';
import { ChartsComponent } from './charts/charts.component';


@NgModule({
  declarations: [
    HomeMerchantComponent,
    FoodListComponent,
    EditMerchantComponent,
    CreateFoodComponent,
    EditFoodComponent,
    DetailMerchantComponent,
    UploadImageComponent,
    EditMerchantBannerComponent,
    EditMerchantAvatarComponent,
    // DetailFoodComponent,
    OderMerchantComponent,
    OrderMerchantWaitConfirmComponent,
    OrderMerchantCompletedComponent,
    OrderMerchantCancelComponent,
    OrderMerchantDetailComponent,
    ReveneuComponent,
    ChartsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CarouselModule,
  ],
  exports: [
    UploadImageComponent
  ]
})
export class MerchantModule { }
