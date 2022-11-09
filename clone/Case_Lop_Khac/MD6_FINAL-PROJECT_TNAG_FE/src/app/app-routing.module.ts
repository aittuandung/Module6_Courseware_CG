import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FoodListComponent} from "./merchant/food-list/food-list.component";
import {HomeComponent} from "./homeshow/home/home.component";
import {HomeMerchantComponent} from "./merchant/home-merchant/home-merchant.component";
import {EditMerchantComponent} from "./merchant/edit-merchant/edit-merchant.component";
import {CustomerLoginComponent} from "./auth/customer-login/customer-login.component";
import {MerchantRegisterComponent} from "./auth/merchant-register/merchant-register.component";
import {CustomerRegisterComponent} from "./auth/customer-register/customer-register.component";
import {MerchantLoginComponent} from "./auth/merchant-login/merchant-login.component";
// @ts-ignore
import {DetailFoodComponent} from "./homeshow/detail-food/detail-food.component";
import {RoleAuthGuard} from "./service/auth/role-auth.guard";
import {AuthGuard} from "./service/auth/auth.guard";
import {MerchantGuardGuard} from "./service/auth/merchant-guard.guard";
import {ShowlistFoodComponent} from "./homeshow/showlist-food/showlist-food.component";
import {ShowlistRestaurantComponent} from "./homeshow/showlist-restaurant/showlist-restaurant.component";
import {DetailMerchantComponent} from "./merchant/detail-merchant/detail-merchant.component";
import {DetailRestaurantComponent} from "./homeshow/detail-restaurant/detail-restaurant.component";
import {CommonModule} from "@angular/common";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'customer-login',
    component: CustomerLoginComponent,
  },
  {
    path: 'detail-food/:id',
    component: DetailFoodComponent
  },
  {
    path: 'detail-restaurant/:id',
    component: DetailRestaurantComponent,
  },
  {
    path: 'merchant-login',
    component: MerchantLoginComponent,
  },
  {
    path: 'register-merchant',
    component: MerchantRegisterComponent,
  },
  {
    path: 'register-customer',
    component: CustomerRegisterComponent,
  },
  {
    path: 'showlist-food',
    component: ShowlistFoodComponent,
  },
  {
    path: 'showlist-restaurant',
    component: ShowlistRestaurantComponent,
  },
  {
    path: 'merchant', canActivate: [MerchantGuardGuard],
    loadChildren: () => import('./merchant/merchant.module').then(module => module.MerchantModule)
  },
  {
    path: 'user', canActivate: [AuthGuard],
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'admin', canActivate: [RoleAuthGuard],
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
