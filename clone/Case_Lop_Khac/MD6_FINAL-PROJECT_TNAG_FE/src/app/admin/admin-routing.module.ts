import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodListComponent} from "../merchant/food-list/food-list.component";
import {MerchantManagementComponent} from "./merchant-management/merchant-management.component";
import {DetailMerchantManagementComponent} from "./detail-merchant-management/detail-merchant-management.component";
import {RoleAuthGuard} from "../service/auth/role-auth.guard";
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {NotAllowMerchantListComponent} from "./not-allow-merchant-list/not-allow-merchant-list.component";

const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent,children:[
      {
        path: '',
        component: MerchantManagementComponent,
      },
      {
        path: 'not-allow',
        component: NotAllowMerchantListComponent,
      }
    ]
  },
  {
    path:'detail-merchant/:id',
    component: DetailMerchantManagementComponent,canActivate:[RoleAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
