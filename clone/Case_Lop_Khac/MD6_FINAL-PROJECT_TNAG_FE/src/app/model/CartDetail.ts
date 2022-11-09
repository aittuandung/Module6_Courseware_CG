import {Cart} from "./Cart";
import {Food} from "./food";
import {Merchant} from "./merchant";

export class CartDetail {
  id?: string;
  cart?: Cart;
  food?: Food;
  merchant?: Merchant;
  quantity?: string;
  totalPrice?: string;
}
