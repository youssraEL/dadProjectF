import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-orders',
  // templateUrl: './orders.component.html',
  // styleUrls: ['./orders.component.scss'],
  template: `<router-outlet></router-outlet>`,
})
export class OrdersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  popupRegister() {
      this.router.navigateByUrl( 'pages/Orders/registering' , {queryParams: {}});
  }
}
