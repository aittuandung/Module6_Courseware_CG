import {FoodCategory} from "./foodCategory";
import {Merchant} from "./merchant";


export interface Food {
  id?: number;
  name?: string;
  image?: string;
  description?: string;
  price?: number;
  priceDiscount?: number;
  recommend?: boolean;
  sold?: number;
  isDelete?: boolean;
  foodCategory?: FoodCategory;
  merchant?: Merchant;
}
