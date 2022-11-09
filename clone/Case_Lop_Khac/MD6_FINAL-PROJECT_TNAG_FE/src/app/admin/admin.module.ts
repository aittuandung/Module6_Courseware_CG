import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {NotAllowMerchantListComponent} from "./not-allow-merchant-list/not-allow-merchant-list.component";
import {DetailMerchantManagementComponent} from "./detail-merchant-management/detail-merchant-management.component";
import {MerchantManagementComponent} from "./merchant-management/merchant-management.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {UploadImageComponent} from "../upload/upload-image/upload-image.component";
import { HomeAdminComponent } from './home-admin/home-admin.component';


@NgModule({
  declarations: [
    NotAllowMerchantListComponent,
    DetailMerchantManagementComponent,
    MerchantManagementComponent,
    HomeAdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgxPaginationModule,
  ],
    exports: [
        MerchantManagementComponent
    ]
})
export class AdminModule { }
