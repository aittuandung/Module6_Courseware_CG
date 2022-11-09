import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./homeshow/home/home.component";
import {DetailProductComponent} from "./homeshow/detail-product/detail-product.component";
import {DetailSellerComponent} from "./homeshow/detail-seller/detail-seller.component";
import {CustomerRegisterComponent} from "./auth/customer-register/customer-register.component";
import {SellerRegisterComponent} from "./auth/seller-register/seller-register.component";
import {ShowlistSellerComponent} from "./homeshow/showlist-seller/showlist-seller.component";
import {LoginComponent} from "./auth/login/login.component";



const routes: Routes = [{
  path: '',
  component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'detail-product/:id',
    component: DetailProductComponent
  },
  {
    path: 'seller-detail/:id',
    component: DetailSellerComponent
  },
  {
    path: 'register-customer',
    component: CustomerRegisterComponent,
  },
  {
    path: 'register-seller',
    component: SellerRegisterComponent,
  },
  {
    path: 'showlist-seller',
    component: ShowlistSellerComponent,
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then(module => module.SellerModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
