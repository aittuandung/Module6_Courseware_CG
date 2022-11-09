import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeUserComponent} from "./home-user/home-user.component";
import {ListcartUserComponent} from "./listcart-user/listcart-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {EditUserAvatarComponent} from "./edit-user-avatar/edit-user-avatar.component";
import {OrderUserComponent} from "./order-user/order-user.component";
import {OrderDetailUserComponent} from "./order-detail-user/order-detail-user.component";

const routes: Routes = [
  {path: '',
  component: HomeUserComponent, children: [
      { path: '',
        component: ListcartUserComponent
      },
      {
        path: 'edit-customer',
        component: EditUserComponent
      },
      {
        path: 'edit-customer-change-avatar',
        component: EditUserAvatarComponent
      },
      {
        path: 'order-user',
        component: OrderUserComponent, children: [
          { path: 'user-order-detail',
            component: OrderDetailUserComponent
          }
        ]
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
