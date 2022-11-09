import {OrderStatus} from "./OrderStatus";
import {Customer} from "./Customer";
import {Merchant} from "./merchant";

export class Order {
  id?: string;
  createAt?: string;
  orderStatus?: OrderStatus;
  shippingFree?: string;
  priceTotal?: string;
  customer?: Customer;
  merchant?: Merchant;
}
