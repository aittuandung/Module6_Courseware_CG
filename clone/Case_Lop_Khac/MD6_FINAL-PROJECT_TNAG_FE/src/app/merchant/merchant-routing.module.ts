import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FoodListComponent} from "./food-list/food-list.component";
import {CreateFoodComponent} from "./create-food/create-food.component";
import {EditMerchantComponent} from "./edit-merchant/edit-merchant.component";
import {HomeMerchantComponent} from "./home-merchant/home-merchant.component";
import {EditFoodComponent} from "./edit-food/edit-food.component";
import {EditMerchantBannerComponent} from "./edit-merchant-banner/edit-merchant-banner.component";
import {EditMerchantAvatarComponent} from "./edit-merchant-avatar/edit-merchant-avatar.component";
import {OderMerchantComponent} from "./oder-merchant/oder-merchant.component";
import {OrderMerchantWaitConfirmComponent} from "./order-merchant-wait-confirm/order-merchant-wait-confirm.component";
import {OrderMerchantCompletedComponent} from "./order-merchant-completed/order-merchant-completed.component";
import {OrderMerchantCancelComponent} from "./order-merchant-cancel/order-merchant-cancel.component";
import {OrderMerchantDetailComponent} from "./order-merchant-detail/order-merchant-detail.component";

const routes: Routes = [


  {
    path: '',
    component: HomeMerchantComponent,
    children: [
      {
        path: '',
        component: FoodListComponent,
      },
      {
        path: 'create-food',
        component: CreateFoodComponent,
      },
      {
        path: 'edit-food/:id',
        component: EditFoodComponent,
      },
      {
        path: 'edit-merchant',
        component: EditMerchantComponent,
      },
      {
        path: 'edit-merchant-banner',
        component: EditMerchantBannerComponent,
      },
      {
        path: 'edit-merchant-avatar',
        component: EditMerchantAvatarComponent,
      },
      {
        path: "oder-merchant",
        component: OderMerchantComponent, children: [
          {
            path: '',
            component: OrderMerchantWaitConfirmComponent, children: [
              {
                path: 'order-merchant-detail',
                component: OrderMerchantDetailComponent,
              }
            ]
          },
          {
            path: 'order-merchant-completed',
            component: OrderMerchantCompletedComponent, children: [
              {
                path: 'order-merchant-detail',
                component: OrderMerchantDetailComponent,
              }
            ]
          },
          {
            path: 'order-merchant-cancel',
            component: OrderMerchantCancelComponent, children: [
              {
                path: 'order-merchant-detail',
                component: OrderMerchantDetailComponent,
              }
            ]
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule {
}
