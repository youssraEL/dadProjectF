import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {LocalDataSource} from 'ng2-smart-table';
import {Stock} from '../../../@core/backend/common/api/Stock';
import {StockService} from '../../../@core/backend/common/services/Stock.service';
import {ProductService} from '../../../@core/backend/common/services/Product.service';


@Component({
  selector: 'ngx-creat-stock',
  templateUrl: './creat-stock.component.html',
  styleUrls: ['./creat-stock.component.scss'],
  providers: [ProductService, StockService],
})
export class CreatStockComponent implements OnInit {
  stock: Stock =  new Stock();
  registerForm: FormGroup;
  submitted = false;
  constructor(private service: ProductService , private formBuilder: FormBuilder ,
              private serviceStock: StockService,
              public dialogRef: MatDialogRef<CreatStockComponent>) {
    this.service.getAll().subscribe( data => {
      data.forEach(obj => {
        this.ProductsList.push(obj.productName);
        });
  });
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ice: ['', Validators.required],
    }, {
      // validator: MustMatch('password', 'confirmPassword'),
    });
    this.service.getAll().subscribe(data => {
      this.source = data;
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.serviceStock.create(this.stock).subscribe(data => {
    });
    this.onReset();
    // display form values on success
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.stock = new Stock();
  }


  source: LocalDataSource = new LocalDataSource();
  ProductsList = [];

  onDeleteConfirm(event: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.service.delete(event.data.id).subscribe( data => {});
    } else {
      event.confirm.reject();
    }
  }

  create(event): any {
    event.confirm.resolve(event.newData);
    this.service.create(event.newData).subscribe( data => {});
  }

  edit(event: any) {
    event.confirm.resolve(event.newData);
    this.service.update(event.newData).subscribe( data => {
    });
  }
}
