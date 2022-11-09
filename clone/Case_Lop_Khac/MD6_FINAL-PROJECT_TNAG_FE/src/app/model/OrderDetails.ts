import {Food} from "./food";
import {Order} from "./Order";

export class OrderDetails {
  id?: string;
  food?: Food;
  order?: Order;
  quantity?: string;
  price?: string;
}
