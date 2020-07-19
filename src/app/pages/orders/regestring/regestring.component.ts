import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Orders} from '../../../@core/backend/common/api/Orders';
import {OrdersService} from '../../../@core/backend/common/services/Orders.service';
import {ClientService} from '../../../@core/backend/common/services/Client.service';
import {ProductService} from '../../../@core/backend/common/services/Product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-regestring',
  templateUrl: './regestring.component.html',
  styleUrls: ['./regestring.component.scss'],
  providers: [OrdersService , ClientService, ProductService],
})
export class RegestringComponent implements OnInit {
  orders: Orders = new Orders();
  registerForm: FormGroup;
  submitted = false;
  client: number;
  products = [];
  product: number;
  clients = [];
  Qte: any;
  constructor(private service: OrdersService , private formBuilder: FormBuilder,
              private serviceClient: ClientService , private serviceProduct: ProductService, private router: Router) {
    this.serviceClient.getAll().subscribe( data => {
       this.clients = [];
      data.forEach( obj => {
        this.clients.push( { name: obj.lastname + ' ' + obj.firstname , id: obj.id  });
      });
    });
    this.serviceProduct.getAll().subscribe( data => {
      this.products = [];
      data.forEach( obj => {
        this.products.push( { product: obj.productName  , id: obj.id  });
      });
      this.products = this.products;
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ice: ['', Validators.required],
    }, {
      // validator: MustMatch('password', 'confirmPassword'),
    });

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.serviceProduct.getById(this.product).subscribe( data => {
      this.orders.product = data;
      if (this.orders.product.quantityInStock >= this.Qte) {
        this.serviceClient.getById(this.client).subscribe( obj => {
          this.orders.client = obj;
          this.router.navigateByUrl( 'pages/orderdetail/registering' , {queryParams: { data: this.orders ,
              Qte: this.Qte}});
          // fthis.service.create(this.orders).subscribe(Object => { });
        }); } else {
        window.alert('worning no acess ');
      }});
    // this.toast.success('The process has been saved.', 'Success');
    this.init();
    // display form values on success
  }
  init() {
   // this.orders = new Orders;
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


}
