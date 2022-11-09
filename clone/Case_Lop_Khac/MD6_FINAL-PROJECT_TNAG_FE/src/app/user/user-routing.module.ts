import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeMerchantComponent} from "../merchant/home-merchant/home-merchant.component";
import {HomweUserComponent} from "./homwe-user/homwe-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {ListcartUserComponent} from "./listcart-user/listcart-user.component";
import {OrderUserComponent} from "./order-user/order-user.component";
import * as path from "path";
import {EditUserAvatarComponent} from "./edit-user-avatar/edit-user-avatar.component";

const routes: Routes = [
  {path: '',
  component: HomweUserComponent,children: [
      {
        path: '',
        component: ListcartUserComponent,
      },
      {
        path: 'edit-customer',
        component: EditUserComponent,
      },
      {
        path: 'edit-customer-change-avatar',
        component: EditUserAvatarComponent,
      },
      {
        path: 'order-user',
        component: OrderUserComponent, children: [
          {path: 'user-order-detail', component: OrderUserComponent}
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
