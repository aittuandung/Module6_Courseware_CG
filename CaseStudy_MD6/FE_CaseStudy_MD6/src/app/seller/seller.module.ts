import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditSellerAvatarComponent } from './edit-seller-avatar/edit-seller-avatar.component';
import { EditSellerBannerComponent } from './edit-seller-banner/edit-seller-banner.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { OrderSellerComponent } from './order-seller/order-seller.component';
import { OrderSellerCancelComponent } from './order-seller-cancel/order-seller-cancel.component';
import { OrderSellerCompleteComponent } from './order-seller-complete/order-seller-complete.component';
import { OrderSellerDetailComponent } from './order-seller-detail/order-seller-detail.component';
import { OrderSellerWaitConfirmComponent } from './order-seller-wait-confirm/order-seller-wait-confirm.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "../share/navbar/navbar.component";
import {FooterComponent} from "../share/footer/footer.component";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    CreateProductComponent,
    SellerProfileComponent,
    EditProductComponent,
    EditSellerAvatarComponent,
    EditSellerBannerComponent,
    ProductListComponent,
    HomeSellerComponent,
    OrderSellerComponent,
    OrderSellerCancelComponent,
    OrderSellerCompleteComponent,
    OrderSellerDetailComponent,
    OrderSellerWaitConfirmComponent
  ],

    imports: [
        FormsModule,
        CommonModule,
        SellerRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        // NgxPaginationModule,
        // CarouselModule,
    ]
})
export class SellerModule { }
