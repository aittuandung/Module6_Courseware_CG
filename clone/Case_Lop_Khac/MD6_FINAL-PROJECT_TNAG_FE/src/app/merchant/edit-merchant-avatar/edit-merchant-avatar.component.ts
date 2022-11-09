import { Component, OnInit } from '@angular/core';
import {ChangeAvatar} from "../../model/ChangeAvatar";
import {AuthService} from "../../service/auth/auth.service";
import {TokenService} from "../../service/token/token.service";
import {MerchantService} from "../../service/merchant/merchant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-merchant-avatar',
  templateUrl: './edit-merchant-avatar.component.html',
  styleUrls: ['./edit-merchant-avatar.component.css']
})
export class EditMerchantAvatarComponent implements OnInit {
  form: any = {};
  // @ts-ignore
  changeAvagtar: ChangeAvatar;
  error: any = {
    message: 'no'
  };
  success: any = {
    message: 'yes'
  };
  status = 'Chọn ảnh thay avatar';
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private merchantService: MerchantService,
              private router: Router) { }
  merchant: any;
  ngOnInit(): void {
    this.merchant = {
      name: '', phoneNumber: '', avatar: '', imageBanner: '',
      address: ''
      , class: {
        id: "1"
      }
    }
    this.getMerchant(1);
  }

  onUploadAvatar($event: any) {
    // @ts-ignore
    document.getElementById("merchant-avatar-edit").hidden = true;
    this.form.avatar = $event;
  }
  getMerchant(id: any) {
    this.merchantService.findById(id).subscribe((data) => {
      this.merchant = data;
    })
  }

  onSubmit() {
    this.changeAvagtar = new ChangeAvatar(this.form.avatar);

    this.merchantService.changeAvatar(this.changeAvagtar).subscribe(data =>{
      // console.log("data lay duoc la gi",data)
      if(JSON.stringify(data)==JSON.stringify(this.error)){
        this.status = 'Upload Avatar!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = "Thay avatar thành công!";
        this.tokenService.setAvatar(this.form.avatar);
        window.location.reload();
      }
    }, error =>{
      this.status = "Thay avatar không thành công!";
    })
  }
}
