import {Seller} from "./Seller";
import {ProductCategory} from "./ProductCategory";

export class Product {
  id : number;
  name: string;
  image: string;
  description: string;
  price: number;
  sold: number;
  productCategory: ProductCategory[];
  seller: Seller;


  constructor(id: number, name: string, image: string, description: string, price: number, sold: number, productCategory: ProductCategory[], seller: Seller) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.sold = sold;
    this.productCategory = productCategory;
    this.seller = seller;
  }
}
