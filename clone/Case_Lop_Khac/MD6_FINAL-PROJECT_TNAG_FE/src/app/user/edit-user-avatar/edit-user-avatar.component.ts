import { Component, OnInit } from '@angular/core';
import {ChangeAvatar} from "../../model/ChangeAvatar";
import {AuthService} from "../../service/auth/auth.service";
import {TokenService} from "../../service/token/token.service";
import {MerchantService} from "../../service/merchant/merchant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-user-avatar',
  templateUrl: './edit-user-avatar.component.html',
  styleUrls: ['./edit-user-avatar.component.css']
})
export class EditUserAvatarComponent implements OnInit {
  customer: any;
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private merchantService: MerchantService,
              private router: Router) { }
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
  ngOnInit(): void {
    this.customer = {
      name: '', phoneNumber: '', avatar: '',
    }
    this.getUser();
  }
  getUser() {
    this.authService.getCurrentUser().subscribe((data) => {
      this.customer = data;
    })
  }
  onUploadAvatar($event: any) {
    // @ts-ignore
    document.getElementById("user-avatar-edit").hidden = true;
    this.form.avatar = $event;
  }
  onSubmit() {
    this.changeAvagtar = new ChangeAvatar(this.form.avatar);

    this.authService.changeAvatarCustomer(this.changeAvagtar).subscribe(data =>{
      // console.log("data lay duoc la gi",data)
      if(JSON.stringify(data)==JSON.stringify(this.error)){
        this.status = 'Thay ảnh đại diện!'
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
