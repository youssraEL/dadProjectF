import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-orderdetail',
  // templateUrl: './orderdetail.component.html',
  // styleUrls: ['./orderdetail.component.scss'],
  // providers: [OrderDetailServicce],
  template: `<router-outlet></router-outlet>`,
})
export class OrderdetailComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
