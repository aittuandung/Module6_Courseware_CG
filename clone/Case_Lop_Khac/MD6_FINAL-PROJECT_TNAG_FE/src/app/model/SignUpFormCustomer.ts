import {AddressCategory} from "./AddressCategory";

export class SignUpFormCustomer {
  name?: string;
  username?: string;
  phone?: string;
  address?: string;
  addressCategory?: AddressCategory
  password?: string;
  confirmPassword?: string;
  roles?: string[];


  constructor(name: string, username: string, phone: string, address: string, addressCategory: AddressCategory, password: string, confirmPassword: string) {
    this.name = name;
    this.username = username;
    this.phone = phone;
    this.address = address;
    this.addressCategory = addressCategory;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.roles = ['user'];
  }
}
