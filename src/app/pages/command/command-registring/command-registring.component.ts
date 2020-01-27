import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Command} from '../../../@core/backend/common/api/Command';
import {CommandService} from '../../../@core/backend/common/services/Command.service';
import {ClientService} from '../../../@core/backend/common/services/Client.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {ProductService} from '../../../@core/backend/common/services/Product.service';
import {Product} from '../../../@core/backend/common/api/Product';

@Component({
  selector: 'ngx-command-registring',
  templateUrl: './command-registring.component.html',
  styleUrls: ['./command-registring.component.scss'],
  providers: [CommandService, ClientService, ToastrModule , ProductService],
})
export class CommandRegistringComponent implements OnInit {
  registerForm: FormGroup;
  command: Command = new Command() ;
  submitted = false;
  ICE: any;
  items = ['Buying' , 'Selling' ];
  product: string;
  private productData: Product = new Product();
  productList = [];
  clientList = [];
  payement = [ 'Cash', 'Personal Cheque' , 'Debit Card' , 'Credit Card'];
  Statut: string;
  constructor(private service: CommandService , private formBuilder: FormBuilder ,
              private serviceClient: ClientService , private toastr: ToastrService ,
              private serviceProduct: ProductService) {
    this.serviceProduct.getAll().subscribe( data => {
      data.forEach( obj => {
        this.productList.push(obj.productName);
      });
    });
    this.serviceClient.getAll().subscribe( data => {
      data.forEach( obj => {
        this.clientList.push(obj.ice);
      });
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ice: ['', Validators.required],
      statut: ['', Validators.required],
    }, {
      // validator: MustMatch('password', 'confirmPassword'),
    });
  }
  get f() { return this.registerForm.controls; }
 init () {
    this.command = new Command();
 }
  onSubmit() {
    this.submitted = true;
    this.serviceClient.getByCin(this.ICE).subscribe(data => {this.command.client = data;
    });
    this.serviceProduct.get(this.product).subscribe( data => {this.command.product = data ; });
    if (this.Statut === 'Buying') {
      this.command.qteSell = 0;
      this.service.create(this.command).subscribe(data => {
      });
      this.serviceProduct.get(this.product).subscribe( data => {
        data.quantityInStock = data.quantityInStock + this.command.qteBuy ;
        this.serviceProduct.update(data).subscribe( obj => {});
      });
    } else {
        this.command.qteBuy = 0;
        this.serviceProduct.get(this.product).subscribe( data => {
          this.productData = data ;
        });
        if (this.productData.quantityInStock < 0 ) {
          this.toastr.warning( 'the Product in the stock is just ' + this.productData.quantityInStock , 'Warning');
        } else {
          this.productData.quantityInStock = this.productData.quantityInStock - this.command.qteSell ;
          this.service.create(this.command).subscribe(data => {
          });
          this.toastr.success( 'the Command added with success' , 'add Command');
          console.log(this.productData);
          this.serviceProduct.update(this.productData).subscribe( data => {});
        }
    }
      this.init();
    // display form values on success
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
