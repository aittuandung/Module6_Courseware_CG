import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-merchant',
  templateUrl: './home-merchant.component.html',
  styleUrls: ['./home-merchant.component.css']
})
export class HomeMerchantComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  hidden() {
    // @ts-ignore
    // document.getElementById('btn-create-food')
    $('#btn-create-food').hid()

  }
}
