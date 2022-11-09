export class SignUpFormMerchant {
  name?: string;
  username?: string;
  phone?: string;
  address?: string;
  openTime?: string;
  closeTime?: string;
  password?: string;
  confirmPassword?: string;
  roles?: string[];


  constructor(name: string, username: string,phone: string,address: string, openTime: string, closeTime: string, password: string, confirmPassword: string) {
    this.name = name;
    this.username = username;
    this.phone = phone;
    this.address = address;
    this.openTime = openTime;
    this.closeTime = closeTime;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.roles = ['merchant']
  }
}
