import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
              private authService:AuthService) { }
customer: any;
  ngOnInit(): void {
    this.customer = {
      name: '', phoneNumber: '', avatar: '',
    };
    this.authService.getCurrentUser().subscribe((data) => {
      this.customer = data;
      console.log("customer info", data)
    });
  }

}
